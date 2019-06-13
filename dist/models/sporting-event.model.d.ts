import { Entity } from '@loopback/repository';
export declare class SportingEvent extends Entity {
    id: string;
    date: string;
    time: string;
    location: string;
    homeTeamId?: string;
    awayTeamId?: string;
    homeTeamScore?: string;
    awayTeamScore?: string;
    league?: string;
    division?: string;
    constructor(data?: Partial<SportingEvent>);
}
