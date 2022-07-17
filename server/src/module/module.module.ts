import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './entities/module.entity';
import { SubmoduleService } from './submodule.service';
import { SubModule } from './entities/submodule.entity';
import { StudentSubModule } from 'src/student/entities/studentsubmodule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section, SubModule, StudentSubModule])],
  providers: [ModuleService, SubmoduleService],
  controllers: [ModuleController]
})
export class ModuleModule { }
