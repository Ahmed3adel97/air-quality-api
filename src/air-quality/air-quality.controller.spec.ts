import { Test, TestingModule } from '@nestjs/testing';
import { AirQualityController } from './air-quality.controller';
import { AirQualityService } from './air-quality.service';

describe('AirQualityController', () => {
  let controller: AirQualityController;
  let service: AirQualityService;

  const mockAirQualityService = {
    getAirQuality: jest.fn(),
    // Add any other methods you use if needed
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirQualityController],
      providers: [
        {
          provide: AirQualityService,
          useValue: mockAirQualityService,
        },
      ],
    }).compile();

    controller = module.get<AirQualityController>(AirQualityController);
    service = module.get<AirQualityService>(AirQualityService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAirQuality', () => {
    it('should return air quality data', async () => {
      const lat = 48.8566;
      const lon = 2.3522;
      const mockData = { aqius: 75, mainus: 'p2' };

      jest.spyOn(service, 'getAirQuality').mockResolvedValue(mockData);

      const result = await controller.getAirQuality(lat, lon);

      expect(result).toEqual(mockData);
      expect(service.getAirQuality).toHaveBeenCalledWith(lat, lon);
    });
  });
});
