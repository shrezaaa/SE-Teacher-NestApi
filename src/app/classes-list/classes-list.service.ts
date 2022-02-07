import { Injectable } from '@nestjs/common';
import { ClassesListQueries } from './classes-list.queries';

@Injectable()
export class ClassesListService {
  constructor(private classesListQueries: ClassesListQueries) {}

  async getClasses(filter) {
    return (await this.classesListQueries.getClasses(filter)).rows;
  }
}
