import * as uuid from 'uuid'
import * as moment from 'moment';

export class Difference {

  static create = (type: string, id: string, key: string, difference: object) => new Difference({type, id, key, difference});
  static toString = (diffObj: Difference) => `${diffObj.key} changed for ${diffObj.type} ${diffObj.id}: ${JSON.stringify(diffObj.difference)}`;

  constructor(args: {id: string, key: string, type: string, difference: object}) {
    this._id = uuid();
    this.created = moment.utc().toISOString();
    this.difference = args.difference || {};
    this.id = args.id || '';
    this.key = args.key || '';
    this.type = args.type || typeof Object;
  }

  _id: string;
  created: string;
  id: string;
  key: string;
  difference: object;
  type: string;
}