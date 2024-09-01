import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AirQuality } from './schemas/air-quality.schema';

@Injectable()
export class AirQualityService {
  private readonly IQAIR_API_KEY = process.env.IQAIR_API_KEY;
  private readonly BASE_URL = 'http://api.airvisual.com/v2/nearest_city';

  constructor(
    @InjectModel(AirQuality.name) private airQualityModel: Model<AirQuality>,
  ) {}

  async getAirQuality(lat: number, lon: number): Promise<any> {
    const response = await axios.get(this.BASE_URL, {
      params: {
        lat,
        lon,
        key: this.IQAIR_API_KEY,
      },
    });

    return response.data.data.current.pollution;
  }

  @Cron('*/20 * * * * *')
  async fetchAndSaveParisAirQuality() {
    const parisCoordinates = { lat: 48.856613, lon: 2.352222 };
    const data = await this.getAirQuality(
      parisCoordinates.lat,
      parisCoordinates.lon,
    );
    console.log({ ...data });
    const airQuality = new this.airQualityModel({ ...data });

    await airQuality.save();
  }
}
