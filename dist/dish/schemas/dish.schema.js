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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishShema = exports.Dish = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Dish = class Dish {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: "мороженое", description: 'Название блюда' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dish.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "image/dlfmnoengd.png", description: 'Путь до статичного фото' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dish.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "самое вкусное", description: 'Описание блюда' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dish.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1800", description: 'Лимит меню' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dish.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "icecream", description: 'тип блюда' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Dish.prototype, "type", void 0);
Dish = __decorate([
    (0, mongoose_1.Schema)()
], Dish);
exports.Dish = Dish;
exports.DishShema = mongoose_1.SchemaFactory.createForClass(Dish);
//# sourceMappingURL=dish.schema.js.map