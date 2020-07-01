import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Brand } from './brand.entity';
import { BrandController } from './brand.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Brand])
  ],
  providers: [BrandService],
  exports: [BrandService],
  controllers: [BrandController]
})
export class BrandModule {}
