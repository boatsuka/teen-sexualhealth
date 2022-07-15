import { Module } from '@nestjs/common';
import { SubmoduleController } from './submodule.controller';
import { SubmoduleService } from './submodule.service';

@Module({
  controllers: [SubmoduleController],
  providers: [SubmoduleService]
})
export class SubmoduleModule {}
