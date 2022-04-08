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
exports.CompanyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CompanyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '623b3aa7d2c',
        description: 'id админа компании.',
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sber', description: 'Название компании.' }),
    __metadata("design:type", String)
], CompanyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1800', description: 'Ценовой лимит компании.' }),
    __metadata("design:type", String)
], CompanyDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dlsnfl', 'fjdlnf'],
        description: 'Maccив id пользователей компании.',
    }),
    __metadata("design:type", Array)
], CompanyDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dlsnfl', 'fjdlnf'],
        description: 'Maccив id заказов.',
    }),
    __metadata("design:type", Array)
], CompanyDto.prototype, "orders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Самое вкусное мороженое.',
        description: 'Описание компании.',
    }),
    __metadata("design:type", String)
], CompanyDto.prototype, "text", void 0);
exports.CompanyDto = CompanyDto;
//# sourceMappingURL=company.dto.js.map