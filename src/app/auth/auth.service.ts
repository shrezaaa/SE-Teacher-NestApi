import { Injectable } from '@nestjs/common';
import { AuthQueriesService } from './auth.queries';

@Injectable()
export class AuthService {
    constructor(private AuthQueriesService: AuthQueriesService) {}
  
    async getRoles() {
      return (await this.AuthQueriesService.getRoles()).rows ;
    }
    
    async signUp(body) {
      return (await this.AuthQueriesService.signUp(body)) ;
    }
}
