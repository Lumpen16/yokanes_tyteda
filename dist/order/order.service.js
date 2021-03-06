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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./schemas/order.schema");
const mongoose_2 = require("mongoose");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async dispatch(id, dish) {
        const order = await this.orderModel.findById(id);
        order.dish.push(dish);
        order.save();
        return order;
    }
    async search(id) {
        const order = this.orderModel.findById(id);
        return order;
    }
    async date(date) {
        const order = this.orderModel.find({
            date: date,
        });
        return order;
    }
    async getOne(id) {
        const order = this.orderModel.findById(id);
        return order;
    }
    async getAll(id, date) {
        const orders = await this.orderModel.find();
        console.log(orders);
        return orders;
    }
    async create(dto) {
        const order = await this.orderModel.create(dto);
        return order;
    }
    async delete(id) {
        try {
            const order = await this.orderModel.findById(id);
            order.delete();
        }
        catch (e) {
            return null;
        }
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map