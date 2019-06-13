import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class SportingEvent extends Entity {
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
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  time: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @property({
    type: 'string',
  })
  homeTeamId?: string;

  @property({
    type: 'string',
  })
  awayTeamId?: string;

  @property({
    type: 'string',
  })
  homeTeamScore?: string;

  @property({
    type: 'string',
  })
  awayTeamScore?: string;

  @property({
    type: 'string',
  })
  league?: string;

  @property({
    type: 'string',
  })
  division?: string;


  constructor(data?: Partial<SportingEvent>) {
    super(data);
  }
}
