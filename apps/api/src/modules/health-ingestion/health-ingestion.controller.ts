import { Body, Controller, Post } from '@nestjs/common';
import { HealthDataDto } from './dto/health-data.dto';
import { HealthIngestionService } from './health-ingestion.service';

@Controller('ingest')
export class HealthIngestionController {
  constructor(private readonly ingestionService: HealthIngestionService) {}

  @Post('apple-health')
  receiveAppleHealthData(@Body() payload: HealthDataDto) {
    return this.ingestionService.receive(payload);
  }
}
