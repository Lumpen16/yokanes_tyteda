/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private userModel;
    private fileService;
    constructor(userModel: Model<UserDocument>, fileService: FileService);
    addImage(id: string, image: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findOne(username: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createUser(dto: UserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addOwner(id: any, ownerId: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addCompany(id: any, companyId: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getAll(count?: number, offset?: number): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOne(id: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    search(query: string): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    delete(id: any): Promise<any>;
}
