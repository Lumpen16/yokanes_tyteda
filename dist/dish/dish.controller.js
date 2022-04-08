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
exports.DishController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const dish_dto_1 = require("./dto/dish.dto");
const dish_service_1 = require("./dish.service");
const swagger_1 = require("@nestjs/swagger");
const dish_schema_1 = require("./schemas/dish.schema");
let DishController = class DishController {
    constructor(dishService) {
        this.dishService = dishService;
    }
    getOne(id) {
        return this.dishService.getOne(id);
    }
    searchbyname(query) {
        return this.dishService.searchbyname(query);
    }
    searchbydate(query, limit) {
        return this.dishService.searchbytype(query, limit);
    }
    getAll(count, offset) {
        return this.dishService.getAll(count, offset);
    }
    create(files, dto) {
        const { image } = files;
        return this.dishService.create(dto, image[0]);
    }
    delete(id) {
        this.dishService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск по Id блюда.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: dish_schema_1.Dish }),
    (0, common_1.Get)('getOne'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск  по названию блюда.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: dish_schema_1.Dish }),
    (0, common_1.Get)('searchbyname'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "searchbyname", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск  по типу блюда и по лимиту.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: dish_schema_1.Dish }),
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiParam)({
        name: 'query',
        description: 'query тип блюда.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'limit',
        description: 'limit лимит блюда.',
    }),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "searchbydate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Постраничная валидация.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: dish_schema_1.Dish }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiParam)({
        name: 'count',
        description: 'count количество пользователей.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'offset',
        description: 'offset номер страницы.',
    }),
    __param(0, (0, common_1.Query)('count')),
    __param(1, (0, common_1.Query)('offset')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание блюда.' }),
    (0, swagger_1.ApiResponse)({ status: 301, type: dish_schema_1.Dish }),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'image', maxCount: 1 }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dish_dto_1.DishDto]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удоление по Id.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: dish_schema_1.Dish }),
    (0, common_1.Get)('delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "delete", null);
DishController = __decorate([
    (0, common_1.Controller)('dish'),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishController);
exports.DishController = DishController;
//# sourceMappingURL=dish.controller.js.map