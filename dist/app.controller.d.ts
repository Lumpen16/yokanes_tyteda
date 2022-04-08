/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
export declare class AppController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<import("./user/schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
