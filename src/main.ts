import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { CustomExceptionFilter } from './commons/filters/custom_exception.filter'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new CustomExceptionFilter())
  app.setGlobalPrefix('/api')
  const options = new DocumentBuilder()
    .setTitle('在线小店')
    .setDescription('在线小店后端接口文档')
    .setVersion('1.0')
    .addTag('shop server')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  await app.listen(3000)
}
bootstrap()
