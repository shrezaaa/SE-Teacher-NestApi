import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorsModule } from './professors/professors.module';

@Module({
  imports: [ProfessorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 