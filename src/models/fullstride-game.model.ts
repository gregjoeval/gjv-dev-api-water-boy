import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class FullstrideGame extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'date',
  })
  lastUpdated?: string;

  @property({
    type: 'string',
  })
  season: string;

  @property({
    type: 'string',
    required: true,
  })
  dateTime: string;

  @property({
    type: 'string',
    required: true,
  })
  rink: string;

  @property({
    type: 'string',
    required: true,
  })
  teams: string;

  @property({
    type: 'string',
  })
  notes?: string;


  constructor(data?: Partial<FullstrideGame>) {
    super(data);
  }
}
