import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ClassesListController } from './classes-list.controller';
import { ClassesListQueries } from './classes-list.queries';
import { ClassesListService } from './classes-list.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassesListController],
  providers: [ClassesListQueries, ClassesListService],
})
export class ClassesListModule {}
