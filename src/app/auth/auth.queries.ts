import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { QueryResult } from 'pg';

@Injectable()
export class AuthQueriesService {
  constructor(private dataBaseService: DatabaseService) {}

  async getRoles(): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `select * from "se-teacher".role;`,
    );
  }

  async signUp(body): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `INSERT INTO "se-teacher".user 
      (gmail ,password , fname , lname)
       VALUES 
       ('${body.Email}',
       '${body.Password}',
       '${body.FirstName}',
       '${body.LastName}');`,
    );
  }
}
