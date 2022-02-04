import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ProfessorQueries {
  constructor(private dataBaseService: DatabaseService) {}

  async getProfessors(): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `select * from "se-teacher".professor;`,
    );
  }
}
