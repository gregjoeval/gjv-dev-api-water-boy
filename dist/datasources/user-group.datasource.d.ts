import { juggler } from '@loopback/repository';
export declare class UserGroupDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
