import { Module, CacheModule, CacheInterceptor } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import {ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as store from 'cache-manager-redis-store'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';
import { TagModule } from './modules/tag/tag.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(),
    CacheModule.register({
        store: store,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        ttl: Number(process.env.CACHE_TTL),
        max: Number(process.env.CACHE_MAX)
      }),
    BrandModule,
    CategoryModule,
    TagModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ],
})
export class AppModule {}
