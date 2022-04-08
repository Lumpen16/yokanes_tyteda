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
exports.OrderShema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Order = class Order {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sfnenlnf32', description: 'Id компании котор заказ' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sfnenlnf32', description: 'Id пользователя которому принадлеж заказ' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["fknfonslfnd", "fsndfksdjf", "fldjjflsjf"], description: 'Id блюд котор заказал пользователь' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Order.prototype, "dish", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "02.03.2022", description: 'Время когда блюдо нужно будет приготовить' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "date", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.Order = Order;
exports.OrderShema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map