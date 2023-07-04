import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import {Observable} from 'rxjs';
import { Request } from "express";
@Injectable()
export class FormInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>{
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>()
        console.log(request.params.limit)
        if(!request.query.limit){
            request.query.limit = "1"
        }
        if(!request.query.skip){
            request.query.skip = "0";
        }
        return next.handle()
    }
}