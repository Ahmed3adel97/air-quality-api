import { Controller, Get, Query } from '@nestjs/common';
import { AirQualityService } from './air-quality.service';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('Air Quality')
@Controller('air-quality')
export class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  @Get()
//   @ApiOperation({ summary: 'Get air quality by coordinates' })
//   @ApiQuery({ name: 'lat', type: Number, required: true })
//   @ApiQuery({ name: 'lon', type: Number, required: true })
//   @ApiResponse({ status: 200, description: 'Air quality data fetched successfully.' })
//   @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  async getAirQuality(@Query('lat') lat: number, @Query('lon') lon: number) {
    console.log({lat});
    
    return this.airQualityService.getAirQuality(lat, lon);
  }

//   @Get('most-polluted')
//   @ApiOperation({ summary: 'Get the most polluted time for Paris' })
//   @ApiResponse({ status: 200, description: 'Most polluted time fetched successfully.' })
//   async getMostPollutedTime() {
//     return this.airQualityService.getMostPollutedTime();
//   }
}