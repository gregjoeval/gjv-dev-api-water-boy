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
import {SportingEvent} from '../models';
import {SportingEventRepository} from '../repositories';

export class SportingEventController {
  constructor(
    @repository(SportingEventRepository)
    public sportingEventRepository : SportingEventRepository,
  ) {}

  @post('/sporting-events', {
    responses: {
      '200': {
        description: 'SportingEvent model instance',
        content: {'application/json': {schema: {'x-ts-type': SportingEvent}}},
      },
    },
  })
  async create(@requestBody() sportingEvent: SportingEvent): Promise<SportingEvent> {
    return await this.sportingEventRepository.create(sportingEvent);
  }

  @get('/sporting-events/count', {
    responses: {
      '200': {
        description: 'SportingEvent model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(SportingEvent)) where?: Where<SportingEvent>,
  ): Promise<Count> {
    return await this.sportingEventRepository.count(where);
  }

  @get('/sporting-events', {
    responses: {
      '200': {
        description: 'Array of SportingEvent model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': SportingEvent}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(SportingEvent)) filter?: Filter<SportingEvent>,
  ): Promise<SportingEvent[]> {
    return await this.sportingEventRepository.find(filter);
  }

  @patch('/sporting-events', {
    responses: {
      '200': {
        description: 'SportingEvent PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() sportingEvent: SportingEvent,
    @param.query.object('where', getWhereSchemaFor(SportingEvent)) where?: Where<SportingEvent>,
  ): Promise<Count> {
    return await this.sportingEventRepository.updateAll(sportingEvent, where);
  }

  @get('/sporting-events/{id}', {
    responses: {
      '200': {
        description: 'SportingEvent model instance',
        content: {'application/json': {schema: {'x-ts-type': SportingEvent}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<SportingEvent> {
    return await this.sportingEventRepository.findById(id);
  }

  @patch('/sporting-events/{id}', {
    responses: {
      '204': {
        description: 'SportingEvent PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() sportingEvent: SportingEvent,
  ): Promise<void> {
    await this.sportingEventRepository.updateById(id, sportingEvent);
  }

  @put('/sporting-events/{id}', {
    responses: {
      '204': {
        description: 'SportingEvent PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sportingEvent: SportingEvent,
  ): Promise<void> {
    await this.sportingEventRepository.replaceById(id, sportingEvent);
  }

  @del('/sporting-events/{id}', {
    responses: {
      '204': {
        description: 'SportingEvent DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sportingEventRepository.deleteById(id);
  }
}
