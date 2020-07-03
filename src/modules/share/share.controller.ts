import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

// todo用caddy 搭建静态服务
// todo图片压缩
@Controller()
export class ShareController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFiles (@UploadedFile() file) {
    const data = {
      url: `${process.env.STATIC_SERVER}/${file.filename}`
    }
    console.log(data)
    return { success: true, data, msg: '上传成功' }
  }
}
