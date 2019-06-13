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
import {Team} from '../models';
import {TeamRepository} from '../repositories';

export class TeamController {
  constructor(
    @repository(TeamRepository)
    public teamRepository : TeamRepository,
  ) {}

  @post('/teams', {
    responses: {
      '200': {
        description: 'Team model instance',
        content: {'application/json': {schema: {'x-ts-type': Team}}},
      },
    },
  })
  async create(@requestBody() team: Team): Promise<Team> {
    return await this.teamRepository.create(team);
  }

  @get('/teams/count', {
    responses: {
      '200': {
        description: 'Team model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Team)) where?: Where<Team>,
  ): Promise<Count> {
    return await this.teamRepository.count(where);
  }

  @get('/teams', {
    responses: {
      '200': {
        description: 'Array of Team model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Team}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Team)) filter?: Filter<Team>,
  ): Promise<Team[]> {
    return await this.teamRepository.find(filter);
  }

  @patch('/teams', {
    responses: {
      '200': {
        description: 'Team PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() team: Team,
    @param.query.object('where', getWhereSchemaFor(Team)) where?: Where<Team>,
  ): Promise<Count> {
    return await this.teamRepository.updateAll(team, where);
  }

  @get('/teams/{id}', {
    responses: {
      '200': {
        description: 'Team model instance',
        content: {'application/json': {schema: {'x-ts-type': Team}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Team> {
    return await this.teamRepository.findById(id);
  }

  @patch('/teams/{id}', {
    responses: {
      '204': {
        description: 'Team PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() team: Team,
  ): Promise<void> {
    await this.teamRepository.updateById(id, team);
  }

  @put('/teams/{id}', {
    responses: {
      '204': {
        description: 'Team PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() team: Team,
  ): Promise<void> {
    await this.teamRepository.replaceById(id, team);
  }

  @del('/teams/{id}', {
    responses: {
      '204': {
        description: 'Team DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.teamRepository.deleteById(id);
  }
}
