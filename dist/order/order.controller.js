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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const common_2 = require("@nestjs/common");
const order_dto_1 = require("./dto/order.dto");
const swagger_1 = require("@nestjs/swagger");
const order_schema_1 = require("./schemas/order.schema");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getAll(id, date) {
        return this.orderService.getAll(id, date);
    }
    getOne(id) {
        return this.orderService.getOne(id);
    }
    search(id) {
        return this.orderService.search(id);
    }
    date(date) {
        return this.orderService.date(date);
    }
    create(dto) {
        return this.orderService.create(dto);
    }
    delete(id) {
        this.orderService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Постраничная валидация.' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_schema_1.Order }),
    (0, common_2.Get)(),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'id компании.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'date',
        description: 'date дата выдачи.',
    }),
    __param(0, (0, common_2.Query)('id')),
    __param(1, (0, common_2.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск по Id' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_2.Get)('getOne'),
    __param(0, (0, common_2.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск по Id Company' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_2.Get)('company'),
    __param(0, (0, common_2.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск по Date' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_2.Get)('date'),
    __param(0, (0, common_2.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "date", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание заказа' }),
    (0, swagger_1.ApiResponse)({ status: 301, type: order_schema_1.Order }),
    (0, common_2.Post)('create'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.OrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление по Id' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_2.Get)('delete'),
    __param(0, (0, common_2.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "delete", null);
OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map