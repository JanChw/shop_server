import { Module } from '@nestjs/common';
import { GoodsAttrSpecService } from './goods_attr_spec.service';
import { GoodsAttrSpecController } from './goods_attr_spec.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsAttrSpec } from './goods_attr_spec.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsAttrSpec])],
  providers: [GoodsAttrSpecService],
  controllers: [GoodsAttrSpecController]
})
export class GoodsAttrSpecModule {}
