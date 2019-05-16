import { DefaultCrudRepository } from '@loopback/repository';
import { FullstrideGame } from '../models';
import { FullstrideGameDataSource } from '../datasources';
export declare class FullstrideGameRepository extends DefaultCrudRepository<FullstrideGame, typeof FullstrideGame.prototype.id> {
    constructor(dataSource: FullstrideGameDataSource);
}
