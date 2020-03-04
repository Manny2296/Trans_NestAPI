import { Test, TestingModule } from '@nestjs/testing';
import { MaquinasController } from './maquinas.controller';

describe('Maquinas Controller', () => {
  let controller: MaquinasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaquinasController],
    }).compile();

    controller = module.get<MaquinasController>(MaquinasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
