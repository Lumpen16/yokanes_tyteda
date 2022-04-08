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
exports.UserShema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let User = class User {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'supername1',
        description: 'Уникальное имя пользователя.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'supername1@gmail.com',
        description: 'Уникальный email пользователя.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '$2b$10$8jUPv1dYFt54r9KlYDlhsOwpg614Z2ellhzP2ktPWVntKSUdsrAUm',
        description: 'Зашифрованный пароль пользователя.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '623b46e4bec930f507f42297',
        description: 'id компании которой управляет пользователь.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Admin', description: 'Роль пользователя.' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'image/6b83fc1a-ed64-41b8-83dc-a38a233c8be9.jpg',
        description: 'Путь до аватарки пользователя.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '623b46e4bec930f507f42297',
        description: 'Id компании в которой состоит пользователь.',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "company", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserShema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map