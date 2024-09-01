import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AirQualityService } from './air-quality.service';
import { AirQualityController } from './air-quality.controller';
import { AirQuality, AirQualitySchema } from './schemas/air-quality.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AirQuality.name, schema: AirQualitySchema }]),
  ],
  providers: [AirQualityService],
  controllers: [AirQualityController]
})
export class AirQualityModule {}
