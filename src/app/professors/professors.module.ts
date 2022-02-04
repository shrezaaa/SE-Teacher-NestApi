import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProfessorQueries } from './professor.queries';
import { ProfessorsController } from './professors.controller';
import { ProfessorsService } from './professors.service';

@Module({
  imports:[DatabaseModule],
  controllers: [ProfessorsController],
  providers: [ProfessorQueries, ProfessorsService],
})
export class ProfessorsModule {}
