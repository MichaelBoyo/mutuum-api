import { Test, TestingModule } from '@nestjs/testing';
import { SignerController } from './signer.controller';
import { SignerService } from './signer.service';

describe('SignerController', () => {
  let controller: SignerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignerController],
      providers: [SignerService],
    }).compile();

    controller = module.get<SignerController>(SignerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
