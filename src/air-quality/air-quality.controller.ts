import { Controller, Get, Query } from '@nestjs/common';
import { AirQualityService } from './air-quality.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  getSchemaPath,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { AirQualityDto } from './air-quality.dto';

@ApiTags('Air Quality')
@Controller('air-quality')
export class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  @Get()
  @ApiOperation({ summary: 'Get air quality by coordinates' })
  @ApiQuery({ name: 'lat', type: Number, required: true })
  @ApiQuery({ name: 'lon', type: Number, required: true })
  @ApiCreatedResponse({
    description: 'Get air quality by coordinates ',
    type: AirQualityDto,
})
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  async getAirQuality(@Query('lat') lat: number, @Query('lon') lon: number) {
    return this.airQualityService.getAirQuality(lat, lon);
  }
}
