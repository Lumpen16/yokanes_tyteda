/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type DishDocument = Dish & Document;
export declare class Dish {
    name: string;
    image: string;
    text: string;
    limit: string;
    type: string;
}
export declare const DishShema: import("mongoose").Schema<Document<Dish, any, any>, import("mongoose").Model<Document<Dish, any, any>, any, any, any>, any, any>;
