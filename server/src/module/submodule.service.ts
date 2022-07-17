import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { Repository } from 'typeorm';
import { SubModule } from './entities/submodule.entity';

@Injectable()
export class SubmoduleService {
    constructor(
        @InjectRepository(SubModule) private subModuleRepository: Repository<SubModule>,
    ) { }
    
    findAll() {
        return this.subModuleRepository.find({ relations: ['section'] });
    }

}
