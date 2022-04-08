/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    username: string;
    email: string;
    password: string;
    owner: string;
    role: string;
    image: string;
    company: string;
}
export declare const UserShema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, any, any>;
