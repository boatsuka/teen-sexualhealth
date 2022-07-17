import { Controller, Get } from '@nestjs/common';
import { ModuleService } from './module.service';

@Controller('module')
export class ModuleController {
    constructor(private readonly sectionService: ModuleService) { }

    @Get()
    findAll() {
        return this.sectionService.findAll();
    }
}
