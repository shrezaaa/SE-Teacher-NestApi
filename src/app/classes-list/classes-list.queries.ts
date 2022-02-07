import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { filter } from 'rxjs';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ClassesListQueries {
  constructor(private dataBaseService: DatabaseService) {}

  async getClasses(filters: any): Promise<QueryResult<any>> {
    return this.dataBaseService.executeQuery(
      `select * from "se-teacher"."public-class" pc 
        join "se-teacher".course c ON pc."course-id" = c.id 
        join "se-teacher".professor p ON pc."professor-gmail"  = p.gmail 
        join "se-teacher"."user" u on u.gmail =p.gmail 
        where 
        u.fname like '%${filters.fname??''}%' 
        and u.lname like'%${filters.lname??''}%' 
        and c.title like '%${filters.title??''}%'
        and
        pc.price >${filters.priceFrom ?? 0}
        and pc.price <${filters.priceTo ?? 90000000};`,
    );
  }
}
