import { Test, TestingModule } from '@nestjs/testing';
import { HealthtipsController } from './healthtips.controller';
import { HealthtipsService } from './healthtips.service';

describe('HealthtipsController', () => {
  let controller: HealthtipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthtipsController],
      providers: [HealthtipsService],
    }).compile();

    controller = module.get<HealthtipsController>(HealthtipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
