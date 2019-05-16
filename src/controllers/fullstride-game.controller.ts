import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {FullstrideGame} from '../models';
import {FullstrideGameRepository} from '../repositories';

export class FullstrideGameController {
  constructor(
    @repository(FullstrideGameRepository)
    public fullstrideGameRepository : FullstrideGameRepository,
  ) {}

  @post('/fullstride-games', {
    responses: {
      '200': {
        description: 'FullstrideGame model instance',
        content: {'application/json': {schema: {'x-ts-type': FullstrideGame}}},
      },
    },
  })
  async create(@requestBody() fullstrideGame: FullstrideGame): Promise<FullstrideGame> {
    return await this.fullstrideGameRepository.create(fullstrideGame);
  }

  @get('/fullstride-games/count', {
    responses: {
      '200': {
        description: 'FullstrideGame model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(FullstrideGame)) where?: Where,
  ): Promise<Count> {
    return await this.fullstrideGameRepository.count(where);
  }

  @get('/fullstride-games', {
    responses: {
      '200': {
        description: 'Array of FullstrideGame model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': FullstrideGame}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(FullstrideGame)) filter?: Filter,
  ): Promise<FullstrideGame[]> {
    return await this.fullstrideGameRepository.find(filter);
  }

  @patch('/fullstride-games', {
    responses: {
      '200': {
        description: 'FullstrideGame PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() fullstrideGame: FullstrideGame,
    @param.query.object('where', getWhereSchemaFor(FullstrideGame)) where?: Where,
  ): Promise<Count> {
    return await this.fullstrideGameRepository.updateAll(fullstrideGame, where);
  }

  @get('/fullstride-games/{id}', {
    responses: {
      '200': {
        description: 'FullstrideGame model instance',
        content: {'application/json': {schema: {'x-ts-type': FullstrideGame}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<FullstrideGame> {
    return await this.fullstrideGameRepository.findById(id);
  }

  @patch('/fullstride-games/{id}', {
    responses: {
      '204': {
        description: 'FullstrideGame PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() fullstrideGame: FullstrideGame,
  ): Promise<void> {
    await this.fullstrideGameRepository.updateById(id, fullstrideGame);
  }

  @put('/fullstride-games/{id}', {
    responses: {
      '204': {
        description: 'FullstrideGame PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fullstrideGame: FullstrideGame,
  ): Promise<void> {
    await this.fullstrideGameRepository.replaceById(id, fullstrideGame);
  }

  @del('/fullstride-games/{id}', {
    responses: {
      '204': {
        description: 'FullstrideGame DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fullstrideGameRepository.deleteById(id);
  }
}
