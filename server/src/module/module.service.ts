import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './entities/module.entity';

@Injectable()
export class ModuleService {
    constructor(
        @InjectRepository(Section) private sectionRepo: Repository<Section>
    ) { }

    findAll() {
        return this.sectionRepo.find();
    }
}
