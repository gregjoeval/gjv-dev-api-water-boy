import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Team extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  memberIds: string[];

  @property({
    type: 'string',
  })
  abbreviation?: string;


  constructor(data?: Partial<Team>) {
    super(data);
  }
}

export interface TeamRelations {
  // describe navigational properties here
}

export type TeamWithRelations = Team & TeamRelations;
