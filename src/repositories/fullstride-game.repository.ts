import {DefaultCrudRepository} from '@loopback/repository';
import {FullstrideGame} from '../models';
import {FullstrideGameDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FullstrideGameRepository extends DefaultCrudRepository<
  FullstrideGame,
  typeof FullstrideGame.prototype.id
> {
  constructor(
    @inject('datasources.FullstrideGame') dataSource: FullstrideGameDataSource,
  ) {
    super(FullstrideGame, dataSource);
  }
}
