import { Controller, Get } from '@nestjs/common';
import { ManagementService } from './management.service';

@Controller('management')
export class ManagementController {
    constructor(private managementService: ManagementService) {}

  @Get('user/search')
  getProfessors() {
      return this.managementService.getUsers();
  }
}