import { Body, Controller, Get, Post } from '@nestjs/common';
import { ManagementService } from './management.service';

@Controller('management')
export class ManagementController {
  constructor(private managementService: ManagementService) {}

  @Get('user/search')
  getUsers() {
    return this.managementService.getUsers();
  }

  @Post('user/deactivate')
  deActiveUser(@Body() body) {
    return this.managementService.deActiveUser(body);
  }

  @Post('user/activate')
  activeUser(@Body() body) {
    return this.managementService.activeUser(body);
  }

  @Post('user/add')
  addUser(@Body() body) {
    return this.managementService.addUser(body);
  }

  @Post('user/edit')
  editUser(@Body() body) {
    return this.managementService.editUser(body);
  }
}
