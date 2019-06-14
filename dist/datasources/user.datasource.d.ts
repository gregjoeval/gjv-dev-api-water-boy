import { juggler } from '@loopback/repository';
export declare class UserDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
