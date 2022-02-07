import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorsModule } from './professors/professors.module';
import { AuthModule } from './auth/auth.module';
import { ClassesListModule } from 'src/app/classes-list/classes.module';

@Module({
  imports: [ProfessorsModule, AuthModule, ClassesListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
