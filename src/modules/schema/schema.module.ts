import { Module } from '@nestjs/common';
import { SchemaService } from './schema.service';
import { SchemaController } from './schema.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Schema } from './schema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schema])],
  providers: [SchemaService],
  controllers: [SchemaController],
  exports: [SchemaService]
})
export class SchemaModule {}
