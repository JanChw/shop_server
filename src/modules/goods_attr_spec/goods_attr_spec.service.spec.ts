import { Test, TestingModule } from '@nestjs/testing';
import { GoodsAttrSpecService } from './goods_attr_spec.service';

describe('GoodsAttrSpecService', () => {
  let service: GoodsAttrSpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodsAttrSpecService],
    }).compile();

    service = module.get<GoodsAttrSpecService>(GoodsAttrSpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
