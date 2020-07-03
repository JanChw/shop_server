import { Test, TestingModule } from '@nestjs/testing';
import { GoodsAttrSpecController } from './goods_attr_spec.controller';

describe('GoodsAttrSpec Controller', () => {
  let controller: GoodsAttrSpecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodsAttrSpecController],
    }).compile();

    controller = module.get<GoodsAttrSpecController>(GoodsAttrSpecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
