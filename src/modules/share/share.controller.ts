import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

// todo用caddy 搭建静态服务
// todo图片压缩
@Controller()
export class ShareController {
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles (@UploadedFiles() files) {
    return files.map(file => `${process.env.STATIC_SERVER}/${file.filename}`)
  }
}
