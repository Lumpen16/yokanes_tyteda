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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const company_dto_1 = require("./dto/company.dto");
const company_service_1 = require("./company.service");
const company_schema_1 = require("./schemas/company.schema");
const swagger_1 = require("@nestjs/swagger");
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    getOne(id) {
        return this.companyService.getOne(id);
    }
    search(query) {
        return this.companyService.search(query);
    }
    getAll(count, offset) {
        return this.companyService.getAll(count, offset);
    }
    addUser(id, userId) {
        return this.companyService.addUser(id, userId);
    }
    addOrder(id, orderId) {
        return this.companyService.addOrders(id, orderId);
    }
    addCreator(dto) {
        return this.companyService.addCreator(dto);
    }
    create(files, dto) {
        const { image } = files;
        return this.companyService.create(dto, image[0]);
    }
    delete(id) {
        return this.companyService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск компании по Id.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: company_schema_1.Company }),
    (0, common_1.Get)('getOne'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id компании.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск по названию компании.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: company_schema_1.Company }),
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiParam)({
        name: 'query',
        description: 'query название компании котор следует найти.',
    }),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Постраничная валидация.' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: company_schema_1.Company }),
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
], CompanyController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить пользователя в компанию.' }),
    (0, swagger_1.ApiResponse)({ status: 301, type: company_schema_1.Company }),
    (0, common_1.Get)('addUser'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'компании.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'UserId',
        description: 'id пользователя.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "addUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить заказ.' }),
    (0, swagger_1.ApiResponse)({ status: 301, type: company_schema_1.Company }),
    (0, common_1.Get)('addOrder'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id компании.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'UserId',
        description: 'id заказа.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "addOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить заказ.' }),
    (0, swagger_1.ApiResponse)({ status: 301, type: company_schema_1.Company }),
    (0, common_1.Post)('addCreator'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "addCreator", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создать новую компанию' }),
    (0, swagger_1.ApiResponse)({ status: 301, type: company_schema_1.Company }),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'image', maxCount: 1 }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.CompanyDto]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удоление по Id.' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: company_schema_1.Company }),
    (0, common_1.Get)('delete'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id компании.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "delete", null);
CompanyController = __decorate([
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map