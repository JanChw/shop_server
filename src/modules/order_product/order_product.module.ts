import { Module } from '@nestjs/common';
import { OrderProductService } from './order_product.service';
import { OrderProductController } from './order_product.controller';

@Module({
  providers: [OrderProductService],
  controllers: [OrderProductController]
})
export class OrderProductModule {}
