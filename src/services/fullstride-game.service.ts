import {FullstrideGameRepository} from '../repositories';
import {FullstrideWebScraperService} from './fullstride-web-scraper.service';
import {Difference, FullstrideGame} from '../models';
import * as R from 'ramda';
import {ITwilioService} from './twilio.service';

export interface IFullstrideGameService {}

export class FullstrideGameService implements IFullstrideGameService {
  public static config: {targetUri: string, teamName: string, phoneNumbers: string[]} = {
    targetUri: process.env.FULLSTRIDE_GAMES__JOB__URI || '',
    teamName: process.env.FULLSTRIDE_GAMES__JOB__TEAM_NAME || '',
    phoneNumbers: (process.env.NOTIFICATION__PHONE_NUMBERS || '').split(',')
  };

  /** game comparison functions **/
  private static isDateTimeEqual = R.allPass([
    R.eqProps('dateTime')
  ]);

  private static isRinkEqual = R.allPass([
    FullstrideGameService.isDateTimeEqual,
    R.eqProps('rink')
  ]);

  private static isTeamsEqual = R.allPass([
    FullstrideGameService.isRinkEqual,
    R.eqProps('teams')
  ]);

  private static isNotesEqual = R.allPass([
    FullstrideGameService.isTeamsEqual,
    R.eqProps('notes')
  ]);

  private static removeLastUpdated = R.omit(['lastUpdated']);

  private static getDifference = R.curry<(arg0: {}, arg1: {}) => object>((gameA, gameB) => R.difference(R.toPairs(gameB), R.toPairs(gameA)));

  private static createGameDiff = (key: string, storedGame: FullstrideGame, game: FullstrideGame) => Difference.create(FullstrideGame.name, game.id, key, FullstrideGameService.getDifference(FullstrideGameService.removeLastUpdated(storedGame), FullstrideGameService.removeLastUpdated(game)));

  static async run (twilioService: ITwilioService, fullstrideGameRepository: FullstrideGameRepository) {
    function calculateDiff (repository: FullstrideGameRepository, games: FullstrideGame[]) {
      return games.map(async game => {
        const result = await repository.findById(game.id);

        if (!result) {
          // if there isn't a game with that id, create one
          await repository.create(game);
          console.log(`CREATED GAME (${game.id})!!!!!`);
          return Promise.resolve(`New game (${game.id}): \n${JSON.stringify(game)}`);
        } else {
          const storedGame = new FullstrideGame(result);
          console.log('--------------');
          console.log(JSON.stringify(game));
          console.log(JSON.stringify(storedGame));
          console.log('--------------');
          const condResult = await R.cond([
            [FullstrideGameService.isNotesEqual, () => {
              // nothing changed --> no action
              console.log('NOTHING CHANGED!!!!');
              return Promise.resolve(null);
            }],
            [FullstrideGameService.isTeamsEqual, async () => {
              // change to notes --> update record --> (probably a score update e.g. went into shootout)
              console.log('CHANGE TO NOTES!!!');
              await repository.updateById(game.id, game);
              return FullstrideGameService.createGameDiff('notes', storedGame, game);
            }],
            [FullstrideGameService.isRinkEqual, async () => {
              // change to teams --> update record --> (probably a score update)
              console.log('CHANGE TO TEAMS!!');
              await repository.updateById(game.id, game);
              return FullstrideGameService.createGameDiff('teams', storedGame, game);
            }],
            [FullstrideGameService.isDateTimeEqual, async () => {
              // change to rink --> update record --> text about change
              console.log('CHANGE TO RINK!');
              await repository.updateById(game.id, game);
              return FullstrideGameService.createGameDiff('rink', storedGame, game);
            }],
            [R.T, async () => {
              // change to date/time --> update record --> text about change
              console.log('CHANGE TO DATE/TIME');
              await repository.updateById(game.id, game);
              return FullstrideGameService.createGameDiff('date/time', storedGame, game);
            }]
          ])(storedGame, game);

          return Promise.resolve(condResult ? Difference.toString(condResult) : null);
        }
      });
    }

    console.log(`${FullstrideGameService.name} running...`);

    const _games = await FullstrideWebScraperService.getGamesForTeam({
      uri: FullstrideGameService.config.targetUri,
      teamName: FullstrideGameService.config.teamName,
    });

    console.log(`Game Count: ${(_games || []).length}`);

    const gameDifferences = await Promise.all(calculateDiff(fullstrideGameRepository, _games));
    console.log('gameDifferences');
    console.log(gameDifferences);

    const filteredGameDiffs = gameDifferences.filter(game => game !== null);
    if (filteredGameDiffs && filteredGameDiffs.length > 0) {
      const header = `${filteredGameDiffs.length} ${FullstrideGameService.config.teamName} games changed:\n\n`;
      const body = filteredGameDiffs.reduce((acc, diff) => diff && acc + `${diff}\n\n`, '');
      const message = header + body;

      FullstrideGameService.config.phoneNumbers.map(phoneNum => {
        twilioService.sendTextMessage({message, to: phoneNum})
      });
    }

    console.log(`${FullstrideGameService.name} stopping...`);

    return filteredGameDiffs;
  }

}