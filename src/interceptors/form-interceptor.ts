import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import {Observable} from 'rxjs';
import { Request } from "express";
@Injectable()
export class FormInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>{
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>()
        if(!request.query.limit){
            request.query.limit = process.env.FETCH_LIMIT
        }
        if(!request.query.skip){
            request.query.skip = process.env.FETCH_SKIP;
        }
        // if(!request.query.order){
        //     request.query.order = process.env.FETCH_ORDER
        // }
        return next.handle()
    }
}