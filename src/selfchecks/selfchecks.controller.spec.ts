import { Test, TestingModule } from '@nestjs/testing';
import { SelfchecksController } from './selfchecks.controller';
import { SelfchecksService } from './selfchecks.service';

describe('SelfchecksController', () => {
  let controller: SelfchecksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelfchecksController],
      providers: [SelfchecksService],
    }).compile();

    controller = module.get<SelfchecksController>(SelfchecksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
