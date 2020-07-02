import { Module, CacheModule, CacheInterceptor } from '@nestjs/common'
import { ServeStaticModule } from "@nestjs/serve-static";
import { AppController } from './app.controller'
import { AppService } from './app.service'
import {ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as store from 'cache-manager-redis-store'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';
import { TagModule } from './modules/tag/tag.module';
import { ShareModule } from './modules/share/share.module';
import { GoodsModule } from './modules/goods/goods.module';
import { BaseModule } from './module/base/base.module';
import { resolve } from 'path';

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
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, '../uploads/'),
      serveRoot: '/image/',
      serveStaticOptions: {
        cacheControl: true,
        maxAge: 60 * 60 * 24
      }
    }),
    BrandModule,
    CategoryModule,
    TagModule,
    ShareModule,
    GoodsModule,
    BaseModule
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
