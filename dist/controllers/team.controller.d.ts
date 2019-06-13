import { Count, Filter, Where } from '@loopback/repository';
import { Team } from '../models';
import { TeamRepository } from '../repositories';
export declare class TeamController {
    teamRepository: TeamRepository;
    constructor(teamRepository: TeamRepository);
    create(team: Team): Promise<Team>;
    count(where?: Where<Team>): Promise<Count>;
    find(filter?: Filter<Team>): Promise<Team[]>;
    updateAll(team: Team, where?: Where<Team>): Promise<Count>;
    findById(id: string): Promise<Team>;
    updateById(id: string, team: Team): Promise<void>;
    replaceById(id: string, team: Team): Promise<void>;
    deleteById(id: string): Promise<void>;
}
