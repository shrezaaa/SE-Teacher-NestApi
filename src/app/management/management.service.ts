import { Injectable } from '@nestjs/common';
import { ManagementQueries } from './management.queries';

@Injectable()
export class ManagementService {
  constructor(private managementQueries: ManagementQueries) {}

  async getUsers() {
    return (await this.managementQueries.getUsers()).rows;
  }

  async deActiveUser(body) {
    return await this.managementQueries.deActiveUser(body);
  }

  async activeUser(body) {
    return await this.managementQueries.activeUser(body);
  }

  async addUser(body) {
    return await this.managementQueries.addUser(body);
  }
  
  async editUser(body) {
    return await this.managementQueries.editUser(body);
  }
}
