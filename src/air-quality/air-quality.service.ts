import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AirQualityService {

    private readonly IQAIR_API_KEY = process.env.IQAIR_API_KEY;
    // http://api.airvisual.com/v2/nearest_city?lat=29.30&lon=30.8&key=c3f624a7-2fda-4837-99e4-71e154b952b5
    private readonly BASE_URL = 'http://api.airvisual.com/v2/nearest_city';

    async getAirQuality(lat: number, lon: number): Promise<any> {
        console.log(process.env.IQAIR_API_KEY);
        
        const response = await axios.get(this.BASE_URL, {
          params: {
            lat,
            lon,
            key: this.IQAIR_API_KEY,
          },
        });
        return response.data;
      }
    
}
