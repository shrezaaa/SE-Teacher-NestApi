import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly _logger = new Logger(DatabaseService.name);

  constructor(@Inject('DATABASE_POOL_CONNECTION') private pool: Pool) {}

  async executeQuery(
    queryText: string,
    values?: any,
  ): Promise<QueryResult<any>> {
    this._logger.debug(`Executing query: ${queryText} (${values})`);
    return this.pool.query(queryText, values);
  }
} 
