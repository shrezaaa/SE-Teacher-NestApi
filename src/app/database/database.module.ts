import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Pool } from 'pg';
import { connectionConfig } from '../../environments/database.env';

const poolFactory = async () => new Pool(connectionConfig);

@Module({
  providers: [
    {
      provide: 'DATABASE_POOL_CONNECTION',
      useFactory: poolFactory,
    },
    DatabaseService,
  ],
  exports: [DatabaseService],
})
export class DatabaseModule {}
