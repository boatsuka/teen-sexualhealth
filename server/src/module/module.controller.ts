import { Controller, Get, Param } from '@nestjs/common';
import { ModuleService } from './module.service';
import { SubmoduleService } from './submodule.service';

@Controller('module')
export class ModuleController {
    constructor(
        private readonly sectionService: ModuleService,
        private readonly subModuleService: SubmoduleService,
    ) { }

    @Get()
    findAllModule() {
        return this.sectionService.findAll();
    }

    @Get('/submodule')
    findAllSubModule() {
        return this.subModuleService.findAll();
    }

    @Get('/submodule/findsubmodule/:id')
    findSubModule(@Param('id') id: number) {
      return this.subModuleService.findSubModule(id)
    }
}
