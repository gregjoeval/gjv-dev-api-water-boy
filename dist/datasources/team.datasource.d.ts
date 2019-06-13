import { juggler } from '@loopback/repository';
export declare class TeamDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
