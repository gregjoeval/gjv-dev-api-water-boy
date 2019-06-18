import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id: string;
    personId: string;
    userGroupId: string;
    email: string;
    phone?: string;
    alias?: string;
    password: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
