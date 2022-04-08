/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { DishDto } from './dto/dish.dto';
import { Dish, DishDocument } from './schemas/dish.schema';
export declare class DishService {
    private dishModel;
    private fileService;
    constructor(dishModel: Model<DishDocument>, fileService: FileService);
    getAll(count?: number, offset?: number): Promise<(Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    searchbyname(query: string): Promise<(Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    searchbytype(query: string, limit: string): Promise<(Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOne(id: any): Promise<Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: any): Promise<any>;
    create(dto: DishDto, image: any): Promise<Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
