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
exports.CompanyShema = exports.Company = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Company = class Company {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Сбербанк', description: 'Название компании.' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image/dngld.jpg',
        description: 'Путь до аватарки пользователя.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Сбер банк мы самые крутые',
        description: 'Описание компании.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1800', description: 'Ценовой лимит компании.' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dlsnfl', 'fjdlnf'],
        description: 'Maccив id заказов.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Company.prototype, "orders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dlsnfl', 'fjdlnf'],
        description: 'Maccив id пользователей.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Company.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '623b46e4bec930f507f42297',
        description: 'id админа компании.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "creator", void 0);
Company = __decorate([
    (0, mongoose_1.Schema)()
], Company);
exports.Company = Company;
exports.CompanyShema = mongoose_1.SchemaFactory.createForClass(Company);
//# sourceMappingURL=company.schema.js.map