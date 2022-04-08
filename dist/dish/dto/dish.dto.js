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
exports.DishDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DishDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "мороженое", description: 'Название блюда' }),
    __metadata("design:type", String)
], DishDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "самое вкусное", description: 'Описание блюда' }),
    __metadata("design:type", String)
], DishDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1800", description: 'Лимит меню' }),
    __metadata("design:type", String)
], DishDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "icecream", description: 'тип блюда' }),
    __metadata("design:type", String)
], DishDto.prototype, "type", void 0);
exports.DishDto = DishDto;
//# sourceMappingURL=dish.dto.js.map