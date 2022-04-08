/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type OrderDocument = Order & Document;
export declare class Order {
    company: string;
    creator: string;
    dish: string[];
    date: string;
}
export declare const OrderShema: import("mongoose").Schema<Document<Order, any, any>, import("mongoose").Model<Document<Order, any, any>, any, any, any>, any, any>;
