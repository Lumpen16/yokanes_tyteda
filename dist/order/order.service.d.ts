/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';
import { OrderDto } from './dto/order.dto';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    dispatch(id: any, dish: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    search(id: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    date(date: any): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOne(id: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getAll(id: any, date: any): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(dto: OrderDto): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: any): Promise<any>;
}
