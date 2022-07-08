import { Test, TestingModule } from '@nestjs/testing';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';

describe('PetController', () => {
  let petController: PetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PetController],
      providers: [PetService],
    }).compile();

    petController = app.get<PetController>(PetController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(petController.getHello()).toBe('Hello World!');
    });
  });
});
