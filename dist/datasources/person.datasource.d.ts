import { juggler } from '@loopback/repository';
export declare class PersonDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
