import { Injectable } from '@nestjs/common';
import { ProfessorQueries } from './professor.queries';

@Injectable()
export class ProfessorsService {
  constructor(private professorQueries: ProfessorQueries) {}
  
  async getProfessors() {
    return (await this.professorQueries.getProfessors()).rows ;
  }
}
