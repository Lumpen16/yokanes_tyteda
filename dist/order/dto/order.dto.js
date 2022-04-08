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
exports.OrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class OrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sfnenlnf32', description: 'Id компании котор принадлежит заказ' }),
    __metadata("design:type", String)
], OrderDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['dljslfjdjs', 'fjskdjfnof'], description: 'Массив блюд' }),
    __metadata("design:type", Array)
], OrderDto.prototype, "dish", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "02.03.2022", description: 'Время когда блюдо нужно будет приготовить' }),
    __metadata("design:type", String)
], OrderDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "dnfnosnofnsof", description: 'Id пользователя которому принадлеж заказ' }),
    __metadata("design:type", String)
], OrderDto.prototype, "creator", void 0);
exports.OrderDto = OrderDto;
//# sourceMappingURL=order.dto.js.map