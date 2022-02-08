import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ManagementController } from './management.controller';
import { ManagementQueries } from './management.queries';
import { ManagementService } from './management.service';

@Module({
  imports:[DatabaseModule],
  controllers: [ManagementController],
  providers: [ManagementQueries,ManagementService]
})
export class ManagementModule {}
