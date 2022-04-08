/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { CompanyDto } from './dto/company.dto';
import { CompanyService } from './company.service';
import { Company } from './schemas/company.schema';
export declare class CompanyController {
    private companyService;
    constructor(companyService: CompanyService);
    getOne(id: string): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    search(query: string): Promise<(Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getAll(count: number, offset: number): Promise<(Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addUser(id: string, userId: string): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addOrder(id: string, orderId: string): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addCreator(dto: any): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    create(files: any, dto: CompanyDto): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: string): Promise<any>;
}
