/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { Order } from './schemas/order.schema';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getAll(id: string, date: string): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOne(id: string): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    search(id: string): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    date(date: string): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(dto: OrderDto): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: number): void;
}
