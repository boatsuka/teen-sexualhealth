import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LearningLog } from './entities/lerninglog.entity';
import { Section } from './entities/section.entity';
import { SubModule } from './entities/submodule.entity';
import { SubmoduleController } from './submodule.controller';
import { SubmoduleService } from './submodule.service';

@Module({
  imports: [TypeOrmModule.forFeature([Section, SubModule, LearningLog])],
  controllers: [SubmoduleController],
  providers: [SubmoduleService]
})
export class SubmoduleModule {}
