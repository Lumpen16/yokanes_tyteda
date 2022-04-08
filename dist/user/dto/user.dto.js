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
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'supername1',
        description: 'Уникальное имя пользователя.',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'supername1@gmail.com',
        description: 'Уникальный email пользователя.',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'supername1',
        description: 'Не зашифрованный пароль пользователя.',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'f2n1wY2ba1SIhHpWf',
        description: 'Id компании в которой состоит пользователь.',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ba1SIhHpWfteOMHd',
        description: 'id компании которой управляет пользователь.',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Admin', description: 'Роль пользователя.' }),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map