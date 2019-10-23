import * as cheerio from "cheerio";
import * as moment from 'moment';
import {FullstrideGame} from '../models';
import fetch from 'cross-fetch';

export class FullstrideWebScraperService {
  /**
   * @summary turns multiple adjacent whitespace into a single whitespace
   * @param {string} str
   * @returns {string}
   */
  static normalizeWhitespace (str: string) {
    return str.replace(/\s+/g, ' ')
  };

  /**
   * @summary get an html string from a uri
   * @param {string} uri
   * @returns {Promise<string|null>}
   */
  static async getHtmlResponse (uri: string) {
    try {
      // console.log(`fetching from ${uri}`);
      const res = await fetch(uri);
      return await res.text();
    } catch(ex) {
      console.error(`Could not request schedule from ${uri}: ${ex}`);
      return null
    }
  };

  /**
   * @summary takes html and returns and array of arrays of strings
   * @param html
   * @param teamName
   * @returns {Array<string>}
   */
  static scrapeContent (html: string, teamName: string) {
    if (!html || !teamName) {
      return null;
    }

    // load document
    const $ = cheerio.load(html);

    const pageRows = $('html > body > font > table > tbody').children();

    // get the 1st row of content (row containing game season)
    const pageTitleRow = $(pageRows).first();

    // get the 1st row of content (row containing game season)
    const titleCell = $(pageTitleRow).find('td > table > tbody').first().children();
    const titleCellText = $(titleCell).text().trim();
    const title: string = titleCellText.length > 0 ? this.normalizeWhitespace(titleCellText) : '';

    // get the 4th row of content (row containing game schedule table)
    const pageTableRow = $(pageRows).last();

    // get the table body
    const table = $(pageTableRow).find('td > table > tbody').first();

    // all of the table rows
    const rows = $(table).children();

    // only the rows containing given team name
    const filteredRows = $(rows).filter(`:contains(${teamName})`);

    // get the info text for each game
    const content: string[][] = [];
    $(filteredRows)
      .map((i, row) => {
        const rowCells = $(row).children();

        // get the text from each cell in a row
        const cellsContent: string[] = $(rowCells)
          .map((j, cell) => {
            const text = $(cell).text().trim();
            return text.length > 0 ? this.normalizeWhitespace(text) : null;
          })
          .get();

        // push cells content onto array
        const arr: string[] = [];
        const cellsContentList: string[] = arr.concat(title).concat(...cellsContent);
        content.push(cellsContentList);
      });

    return content
  };

  /**
   * @summary takes an array of strings and maps them to a Game object
   * @param {Array<string>} content
   * @returns {Array<FullstrideGame>}
   */
  static mapGames (content: string[][]): Array<FullstrideGame> {
    return content.map((gameContent: string[]) => {
      // TODO: parse location?
      // TODO: put teams into array? (hard to do with the scores currently)
      const [season, dateTimeString, rink, number, teams, notes]: string[] = gameContent || [];
      const dateTimeParsed = moment(dateTimeString, 'MMM DD LT');
      const dateTime = dateTimeParsed.isValid()
        ? dateTimeParsed.format('YYYY MMM DD h:mm A') // take the parsed string when possible
        : dateTimeString; // otherwise take the native date string
      return new FullstrideGame({
        season: season,
        dateTime: dateTime,
        rink: rink,
        number: number,
        teams: teams,
        notes: notes || ''
      });
    });
  }

  /**
   * @summary scrapes a web page for a table, gets a filtered set of data from that table, then returns an array of object created with that data
   * @param uri
   * @param teamName
   * @returns {Promise<Array<FullstrideGame>>}
   */
  public static async getGamesForTeam ({uri, teamName}: {uri: string, teamName: string}): Promise<Array<FullstrideGame>> {
    const html = await this.getHtmlResponse(uri);
    if (!html) {
      return [];
    }

    const content = this.scrapeContent(html, teamName);
    if (!content) {
      return [];
    }

    return this.mapGames(content);
  };
}