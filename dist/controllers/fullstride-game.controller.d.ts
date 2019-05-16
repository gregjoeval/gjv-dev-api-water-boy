import { Count, Filter, Where } from '@loopback/repository';
import { FullstrideGame } from '../models';
import { FullstrideGameRepository } from '../repositories';
export declare class FullstrideGameController {
    fullstrideGameRepository: FullstrideGameRepository;
    constructor(fullstrideGameRepository: FullstrideGameRepository);
    create(fullstrideGame: FullstrideGame): Promise<FullstrideGame>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<FullstrideGame[]>;
    updateAll(fullstrideGame: FullstrideGame, where?: Where): Promise<Count>;
    findById(id: string): Promise<FullstrideGame>;
    updateById(id: string, fullstrideGame: FullstrideGame): Promise<void>;
    replaceById(id: string, fullstrideGame: FullstrideGame): Promise<void>;
    deleteById(id: string): Promise<void>;
}
