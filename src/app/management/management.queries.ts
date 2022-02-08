import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ManagementQueries {
  constructor(private dataBaseService: DatabaseService) {}

  async getUsers(): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `select * from "se-teacher".user;`,
    );
  }

  async deActiveUser(body): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `select "se-teacher".deactive_user('${body.gmail ?? ''}');`,
    );
  }

  async addUser(body): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `select "se-teacher".add_user('${body.gmail ?? ''}', 
      '${body.fname ?? ''}' ,
      '${body.lname ?? ''}' , 
      '${body.password ?? ''}' ,
      ${body.roleid ?? ''});`,
    );
  }
}
