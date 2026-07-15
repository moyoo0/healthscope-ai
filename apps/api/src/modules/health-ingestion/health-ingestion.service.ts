import { Injectable, Logger } from '@nestjs/common';
import { HealthDataDto } from './dto/health-data.dto';

@Injectable()
export class HealthIngestionService {
  private readonly logger = new Logger(HealthIngestionService.name);

  receive(payload: HealthDataDto) {
    this.logger.log(
      `Received ${payload.records.length} health records from ${payload.source}`,
    );

    // MVP step: keep the payload in memory only. Persistence will be added next.
    return {
      ok: true,
      receivedRecords: payload.records.length,
      source: payload.source,
    };
  }
}
