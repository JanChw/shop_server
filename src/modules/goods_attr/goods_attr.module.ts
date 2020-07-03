import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsAttr } from './goods_attr.entity';
import { GoodsAttrService } from './goods_attr.service';
import { GoodsAttrController } from './goods_attr.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsAttr])],
  providers: [GoodsAttrService],
  controllers: [GoodsAttrController]
})
export class GoodsAttrModule {}
