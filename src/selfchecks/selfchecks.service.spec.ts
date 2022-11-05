import { Test, TestingModule } from '@nestjs/testing';
import { SelfchecksService } from './selfchecks.service';

describe('SelfchecksService', () => {
  let service: SelfchecksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelfchecksService],
    }).compile();

    service = module.get<SelfchecksService>(SelfchecksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
