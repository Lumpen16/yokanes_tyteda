/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { CompanyDto } from './dto/company.dto';
import { Company, CompanyDocument } from './schemas/company.schema';
export declare class CompanyService {
    private companyModel;
    private fileService;
    constructor(companyModel: Model<CompanyDocument>, fileService: FileService);
    addOrders(id: any, order: any): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addCreator(dto: any): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    addUser(id: any, userId: any): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getAll(count?: number, offset?: number): Promise<(Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    search(query: string): Promise<(Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOne(id: any): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: any): Promise<any>;
    create(dto: CompanyDto, image: any): Promise<Company & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
