"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const file_service_1 = require("../file/file.service");
const dish_schema_1 = require("./schemas/dish.schema");
let DishService = class DishService {
    constructor(dishModel, fileService) {
        this.dishModel = dishModel;
        this.fileService = fileService;
    }
    async getAll(count = 10, offset = 1) {
        const dish = await this.dishModel
            .find();
        return dish;
    }
    async searchbyname(query) {
        const tracks = await this.dishModel.find({
            name: query
        });
        return tracks;
    }
    async searchbytype(query, limit) {
        const tracks = await this.dishModel.find({
            type: query,
            limit: limit
        });
        return tracks;
    }
    async getOne(id) {
        const dish = this.dishModel.findById(id);
        return dish;
    }
    async delete(id) {
        try {
            const dish = await this.dishModel.findById(id);
            dish.delete();
        }
        catch (e) {
            return null;
        }
    }
    async create(dto, image) {
        const imagePath = this.fileService.createFile(file_service_1.FileType.IMAGE, image);
        const dish = await this.dishModel.create(Object.assign(Object.assign({}, dto), { image: imagePath }));
        return dish;
    }
};
DishService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(dish_schema_1.Dish.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_service_1.FileService])
], DishService);
exports.DishService = DishService;
//# sourceMappingURL=dish.service.js.map