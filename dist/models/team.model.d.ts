import { Entity } from '@loopback/repository';
export declare class Team extends Entity {
    id: string;
    name: string;
    type?: string;
    memberIds: string[];
    abbreviation?: string;
    constructor(data?: Partial<Team>);
}
export interface TeamRelations {
}
export declare type TeamWithRelations = Team & TeamRelations;
