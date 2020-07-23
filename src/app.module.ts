import { Module, CacheModule } from '@nestjs/common'
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
import { BaseModule } from './modules/base/base.module';
import { ProductModule } from './modules/product/product.module';
import { GoodsAttrModule } from './modules/goods_attr/goods_attr.module';
import { GoodsAttrSpecModule } from './modules/goods_attr_spec/goods_attr_spec.module';
import { resolve } from 'path';
import { CustomCacheInterceptor } from './commons/interceptors/custom_cache.interceptor';
import { CustomSerializerInterceptor } from './commons/interceptors/custom_serializer.interceptor';
import { UserModule } from './modules/user/user.module';
import { StaffModule } from './modules/staff/staff.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { OrderProductModule } from './modules/order_product/order_product.module';

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
    BaseModule,
    ProductModule,
    GoodsAttrModule,
    GoodsAttrSpecModule,
    UserModule,
    StaffModule,
    CartModule,
    OrderModule,
    OrderProductModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomCacheInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CustomSerializerInterceptor
    }
  ],
})
export class AppModule {}
