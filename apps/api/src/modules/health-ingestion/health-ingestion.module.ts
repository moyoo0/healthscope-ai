import { Module } from '@nestjs/common';
import { HealthIngestionController } from './health-ingestion.controller';
import { HealthIngestionService } from './health-ingestion.service';

@Module({
  controllers: [HealthIngestionController],
  providers: [HealthIngestionService],
})
export class HealthIngestionModule {}
