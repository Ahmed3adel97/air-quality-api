import { Test, TestingModule } from '@nestjs/testing';
import { AirQualityService } from './air-quality.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AirQuality } from './schemas/air-quality.schema';
import axios from 'axios';
import { jest } from '@jest/globals';

// Mock the axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Define a mock for the AirQuality model
class MockAirQualityModel {
  async save(): Promise<this> {
    return this;
  }
}

describe('AirQualityService', () => {
  let service: AirQualityService;
  let model: Model<AirQuality>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AirQualityService,
        {
          provide: getModelToken(AirQuality.name),
          useValue: MockAirQualityModel,
        },
      ],
    }).compile();

    service = module.get<AirQualityService>(AirQualityService);
    model = module.get<Model<AirQuality>>(getModelToken(AirQuality.name));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAirQuality', () => {
    it('should return air quality data', async () => {
      const mockResponse = {
        data: {
          data: {
            current: {
              pollution: {
                aqius: 75,
                mainus: 'p2',
                aqicn: 32,
                maincn: 'p2',
                ts: '2024-09-01T00:00:00.000Z',
              },
            },
          },
        },
      };

      // Mock the axios call
      mockedAxios.get.mockResolvedValue(mockResponse as any);

      const lat = 48.8566;
      const lon = 2.3522;
      const result = await service.getAirQuality(lat, lon);

      expect(result).toEqual(mockResponse.data.data.current.pollution);
      expect(mockedAxios.get).toHaveBeenCalledWith(service['BASE_URL'], {
        params: { lat, lon, key: process.env.IQAIR_API_KEY },
      });
    });
  });

  describe('fetchAndSaveParisAirQuality', () => {
    it('should fetch and save air quality data for Paris', async () => {
      const mockAirQualityData = {
        aqius: 75,
        mainus: 'p2',
        aqicn: 32,
        maincn: 'p2',
        ts: new Date('2024-09-01T00:00:00.000Z'),
      };

      // Mock the getAirQuality call
      jest.spyOn(service, 'getAirQuality').mockResolvedValue(mockAirQualityData as any)

      await service.fetchAndSaveParisAirQuality();

      // Ensure getAirQuality was called with the correct parameters
      expect(service.getAirQuality).toHaveBeenCalledWith(48.856613, 2.352222);
    });
  });
});
