import {Entity, model, property} from '@loopback/repository';
import * as moment from 'moment';

@model({settings: {}})
export class FullstrideGame extends Entity {
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
  number: string;

  @property({
    type: 'date',
  })
  lastUpdated?: string;

  @property({
    type: 'string',
    required: true,
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
    const args = data || {};
    const utc = moment.utc();
    this.season = args.season || `${utc.quarter()} ${utc.year()}`;
    this.number = args.number || String((Math.random() * 1000) + 1000); // given number or a random number between 1000 and 2000
    this.id = args.id || (`${this.season}_${this.number}`).toLowerCase().replace(' ', '_');
    this.lastUpdated = args.lastUpdated || utc.toISOString();
  }
}
