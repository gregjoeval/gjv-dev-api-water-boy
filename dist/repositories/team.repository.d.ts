import { DefaultCrudRepository } from '@loopback/repository';
import { Team } from '../models';
import { TeamDataSource } from '../datasources';
export declare class TeamRepository extends DefaultCrudRepository<Team, typeof Team.prototype.id> {
    constructor(dataSource: TeamDataSource);
}
