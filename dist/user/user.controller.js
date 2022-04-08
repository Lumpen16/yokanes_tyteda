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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./dto/user.dto");
const user_schema_1 = require("./schemas/user.schema");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    addImage(files, id) {
        const { image } = files;
        return this.userService.addImage(id, image[0]);
    }
    createUser(dto) {
        return this.userService.createUser(dto);
    }
    getOne(id) {
        return this.userService.getOne(id);
    }
    addOwner(id, ownerId) {
        return this.userService.addOwner(id, ownerId);
    }
    addCompany(id, companyId) {
        return this.userService.addCompany(id, companyId);
    }
    getAll(count, offset) {
        return this.userService.getAll(count, offset);
    }
    search(query) {
        return this.userService.search(query);
    }
    delete(id) {
        return this.userService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Добавление фотографии профиля по id пользователя.',
    }),
    (0, swagger_1.ApiResponse)({ status: 300, type: user_schema_1.User }),
    (0, common_1.Post)('addImage'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id пользователя.',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'image', maxCount: 1 }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addImage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание пользователя.' }),
    (0, swagger_1.ApiResponse)({ status: 300, type: user_schema_1.User }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск пользователя по Id.' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_schema_1.User }),
    (0, common_1.Get)('getOne'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id пользователя.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Добавление компании которой упровляет пользователь.',
    }),
    (0, swagger_1.ApiResponse)({ status: 301, type: user_schema_1.User }),
    (0, common_1.Post)('addOwner'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id пользователя.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'ownerId',
        description: 'id компании которой управляет пользователь.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('ownerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addOwner", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Добавление компании в которой будет состоять пользователь.',
    }),
    (0, swagger_1.ApiResponse)({ status: 301, type: user_schema_1.User }),
    (0, common_1.Post)('addCompany'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id пользователя.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'companyId',
        description: 'id компании в которой будет состоять пользователь.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addCompany", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Постраничная валидация.' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_schema_1.User }),
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
], UserController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск по имени пользователя.' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_schema_1.User }),
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiParam)({
        name: 'query',
        description: 'query имя пользователя котор следует найти.',
    }),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление по id.' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_schema_1.User }),
    (0, common_1.Get)('delete'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id пользователя которого следует удалить.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map