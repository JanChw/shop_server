import { Module, BadRequestException } from '@nestjs/common';
import { MulterModule } from "@nestjs/platform-express";
import { ShareService } from './share.service';
import { ShareController } from './share.controller';
import { extname } from "path";
import { diskStorage } from "multer";
@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, './uploads')
        },
        filename: (req, file, cb) => {
          const { originalname, filename } = file
          cb(null, Date.now() + extname(originalname))
        }
      }),
      fileFilter: (req, file, cb) => {
        const minetypes = [
          'image/jpeg',
          'image/jpg',
          'image/png'
        ]

        const isAllowed = minetypes.includes(file.mimetype)

        if (isAllowed) {
          cb(null, true)
        } else {
          cb(new BadRequestException('不支持上传此类型文件'), false)
        }
      }
    }),
  ],
  providers: [ShareService],
  controllers: [ShareController]
})
export class ShareModule {}
