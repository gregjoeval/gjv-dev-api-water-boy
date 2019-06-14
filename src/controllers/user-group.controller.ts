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
import {UserGroup} from '../models';
import {UserGroupRepository} from '../repositories';

export class UserGroupController {
  constructor(
    @repository(UserGroupRepository)
    public userGroupRepository : UserGroupRepository,
  ) {}

  @post('/user-groups', {
    responses: {
      '200': {
        description: 'UserGroup model instance',
        content: {'application/json': {schema: {'x-ts-type': UserGroup}}},
      },
    },
  })
  async create(@requestBody() userGroup: UserGroup): Promise<UserGroup> {
    return await this.userGroupRepository.create(userGroup);
  }

  @get('/user-groups/count', {
    responses: {
      '200': {
        description: 'UserGroup model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(UserGroup)) where?: Where<UserGroup>,
  ): Promise<Count> {
    return await this.userGroupRepository.count(where);
  }

  @get('/user-groups', {
    responses: {
      '200': {
        description: 'Array of UserGroup model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': UserGroup}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(UserGroup)) filter?: Filter<UserGroup>,
  ): Promise<UserGroup[]> {
    return await this.userGroupRepository.find(filter);
  }

  @patch('/user-groups', {
    responses: {
      '200': {
        description: 'UserGroup PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() userGroup: UserGroup,
    @param.query.object('where', getWhereSchemaFor(UserGroup)) where?: Where<UserGroup>,
  ): Promise<Count> {
    return await this.userGroupRepository.updateAll(userGroup, where);
  }

  @get('/user-groups/{id}', {
    responses: {
      '200': {
        description: 'UserGroup model instance',
        content: {'application/json': {schema: {'x-ts-type': UserGroup}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<UserGroup> {
    return await this.userGroupRepository.findById(id);
  }

  @patch('/user-groups/{id}', {
    responses: {
      '204': {
        description: 'UserGroup PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() userGroup: UserGroup,
  ): Promise<void> {
    await this.userGroupRepository.updateById(id, userGroup);
  }

  @put('/user-groups/{id}', {
    responses: {
      '204': {
        description: 'UserGroup PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userGroup: UserGroup,
  ): Promise<void> {
    await this.userGroupRepository.replaceById(id, userGroup);
  }

  @del('/user-groups/{id}', {
    responses: {
      '204': {
        description: 'UserGroup DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userGroupRepository.deleteById(id);
  }
}
