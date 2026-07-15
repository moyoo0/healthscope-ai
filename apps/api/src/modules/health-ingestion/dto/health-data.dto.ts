import {
  IsISO8601,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export const HEALTH_RECORD_TYPES = [
  'resting_heart_rate',
  'heart_rate_variability',
] as const;

export class DateRangeDto {
  @IsISO8601()
  from!: string;

  @IsISO8601()
  to!: string;
}

export class HealthRecordDto {
  @IsIn(HEALTH_RECORD_TYPES)
  type!: (typeof HEALTH_RECORD_TYPES)[number];

  @IsNumber()
  value!: number;

  @IsString()
  unit!: string;

  @IsISO8601()
  startTime!: string;

  @IsISO8601()
  endTime!: string;

  @IsOptional()
  @IsString()
  sourceName?: string;
}

export class HealthDataDto {
  @IsString()
  source!: string;

  @IsISO8601()
  exportedAt!: string;

  @ValidateNested()
  @Type(() => DateRangeDto)
  range!: DateRangeDto;

  @ValidateNested({ each: true })
  @Type(() => HealthRecordDto)
  records!: HealthRecordDto[];
}
