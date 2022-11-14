import { Test, TestingModule } from '@nestjs/testing';
import { HealthtipsService } from './healthtips.service';

describe('HealthtipsService', () => {
  let service: HealthtipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthtipsService],
    }).compile();

    service = module.get<HealthtipsService>(HealthtipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
