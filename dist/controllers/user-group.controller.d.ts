import { Count, Filter, Where } from '@loopback/repository';
import { UserGroup } from '../models';
import { UserGroupRepository } from '../repositories';
export declare class UserGroupController {
    userGroupRepository: UserGroupRepository;
    constructor(userGroupRepository: UserGroupRepository);
    create(userGroup: UserGroup): Promise<UserGroup>;
    count(where?: Where<UserGroup>): Promise<Count>;
    find(filter?: Filter<UserGroup>): Promise<UserGroup[]>;
    updateAll(userGroup: UserGroup, where?: Where<UserGroup>): Promise<Count>;
    findById(id: string): Promise<UserGroup>;
    updateById(id: string, userGroup: UserGroup): Promise<void>;
    replaceById(id: string, userGroup: UserGroup): Promise<void>;
    deleteById(id: string): Promise<void>;
}
