import { Controller, Get, Query } from '@nestjs/common';
import { ClassesListService } from './classes-list.service';

@Controller('classes')
export class ClassesListController {
  constructor(private classesListService: ClassesListService) {}
 
  @Get('search')
  getClasses(@Query() filter) {
    return this.classesListService.getClasses(filter);
  }
}
