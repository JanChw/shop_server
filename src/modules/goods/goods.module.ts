import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from './goods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Goods])],
  providers: [GoodsService],
  controllers: [GoodsController]
})
export class GoodsModule {}
