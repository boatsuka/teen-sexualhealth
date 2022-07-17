import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './entities/module.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  providers: [ModuleService],
  controllers: [ModuleController]
})
export class ModuleModule { }
