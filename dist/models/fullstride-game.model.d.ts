import { Entity } from '@loopback/repository';
export declare class FullstrideGame extends Entity {
    id: string;
    lastUpdated?: string;
    dateTime: string;
    rink: string;
    teams: string;
    notes?: string;
    constructor(data?: Partial<FullstrideGame>);
}
