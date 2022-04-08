/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    addImage(files: any, id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createUser(dto: UserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getOne(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addOwner(id: string, ownerId: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addCompany(id: string, companyId: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getAll(count: number, offset: number): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    search(query: string): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    delete(id: string): Promise<any>;
}
