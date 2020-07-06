import { Injectable, CacheInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { tap } from 'rxjs/operators'
@Injectable()
export class CustomCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest()
    return `nest_app_${request.url}`
  }

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest()
    const service = request.get('service')
    const key = this.trackBy(context)
    const method = request.method
    const value = await this.cacheManager.get(key)
    if (method === 'GET' && value && !service) {
      return of (value)
    } else {
      return next.handle().pipe(tap(res => method === 'GET' && this.cacheManager.set(key, res)))
    }
    
  }
}
