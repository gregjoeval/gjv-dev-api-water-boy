import { Entity } from '@loopback/repository';
export declare class UserGroup extends Entity {
    id: string;
    name: string;
    memberIds?: string[];
    constructor(data?: Partial<UserGroup>);
}
export interface UserGroupRelations {
}
export declare type UserGroupWithRelations = UserGroup & UserGroupRelations;
