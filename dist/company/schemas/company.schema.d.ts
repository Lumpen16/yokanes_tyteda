/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type CompanyDocument = Company & Document;
export declare class Company {
    name: string;
    image: string;
    text: string;
    limit: string;
    orders: string[];
    users: string[];
    creator: string;
}
export declare const CompanyShema: import("mongoose").Schema<Document<Company, any, any>, import("mongoose").Model<Document<Company, any, any>, any, any, any>, any, any>;
