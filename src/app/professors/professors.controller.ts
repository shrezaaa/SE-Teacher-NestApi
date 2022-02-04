import { Controller, Get } from '@nestjs/common';
import { ProfessorsService } from './professors.service';

@Controller('professors')
export class ProfessorsController {
  constructor(private professorService: ProfessorsService) {}

  @Get()
  getProfessors() {
      return this.professorService.getProfessors();
  }
}
