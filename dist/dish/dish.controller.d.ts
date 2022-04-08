/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { DishDto } from './dto/dish.dto';
import { DishService } from './dish.service';
import { Dish } from './schemas/dish.schema';
export declare class DishController {
    private dishService;
    constructor(dishService: DishService);
    getOne(id: string): Promise<Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    searchbyname(query: string): Promise<(Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    searchbydate(query: string, limit: string): Promise<(Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getAll(count: number, offset: number): Promise<(Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(files: any, dto: DishDto): Promise<Dish & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(id: string): void;
}
