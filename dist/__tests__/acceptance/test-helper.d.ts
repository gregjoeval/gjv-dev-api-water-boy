import { GjvDevExampleApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: GjvDevExampleApplication;
    client: Client;
}
