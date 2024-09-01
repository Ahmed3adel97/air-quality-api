import { ApiProperty } from '@nestjs/swagger';

export class AirQualityDto {
  @ApiProperty({ example: '2024-09-01T03:00:00.000Z', description: 'Timestamp of the air quality data' })
  ts: string;

  @ApiProperty({ example: 102, description: 'Air Quality Index in the US' })
  aqius: number;

  @ApiProperty({ example: 'p2', description: 'Main pollutant in the US' })
  mainus: string;

  @ApiProperty({ example: 51, description: 'Air Quality Index in China' })
  aqicn: number;

  @ApiProperty({ example: 'p2', description: 'Main pollutant in China' })
  maincn: string;
}


export class DateTimeDto {
    @ApiProperty({ example: '2024-09-01T03:00:00.000Z', description: 'Timestamp of the air quality data' })
    ts: string;
  }
  