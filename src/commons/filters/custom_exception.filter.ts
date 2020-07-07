import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express'

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const [status, message] =
      exception instanceof HttpException
        ? [exception.getStatus(), exception.getResponse()['message']]
        : [HttpStatus.INTERNAL_SERVER_ERROR, '服务器内部异常'];

    response
      .status(status)
      .json({
        success: false,
        data: null,
        message
      })
  }
}
