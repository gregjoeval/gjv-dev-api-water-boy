import { Count, Filter, Where } from '@loopback/repository';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    create(user: User): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: string): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
}
