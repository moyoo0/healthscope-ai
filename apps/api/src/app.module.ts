import { Module } from '@nestjs/common';
import { HealthIngestionModule } from './modules/health-ingestion/health-ingestion.module';

@Module({
  imports: [HealthIngestionModule],
})
export class AppModule {}
