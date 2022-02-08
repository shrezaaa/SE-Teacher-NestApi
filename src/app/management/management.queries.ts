import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ManagementQueries {
  constructor(private dataBaseService: DatabaseService) {}

  async getUsers(): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `select * from "se-teacher".professor;`,
    );
  }
}
