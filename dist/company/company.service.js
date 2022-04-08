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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const file_service_1 = require("../file/file.service");
const company_schema_1 = require("./schemas/company.schema");
let CompanyService = class CompanyService {
    constructor(companyModel, fileService) {
        this.companyModel = companyModel;
        this.fileService = fileService;
    }
    async addOrders(id, order) {
        const company = await this.companyModel.findById(id);
        company.users.push(order);
        company.save();
        return company;
    }
    async addCreator(dto) {
        const company = await this.companyModel.findById(dto.id);
        company.creator = dto.creator;
        company.save();
        return company;
    }
    async addUser(id, userId) {
        const company = await this.companyModel.findById(id);
        company.users.push(userId);
        company.save();
        return company;
    }
    async getAll(count = 10, offset = 1) {
        const company = await this.companyModel
            .find()
            .skip(Number(offset))
            .limit(Number(count));
        return company;
    }
    async search(query) {
        const companys = await this.companyModel.find({
            name: query,
        });
        return companys;
    }
    async getOne(id) {
        const company = this.companyModel.findById(id);
        return company;
    }
    async delete(id) {
        try {
            const company = await this.companyModel.findById(id);
            company.delete();
        }
        catch (e) {
            return null;
        }
    }
    async create(dto, image) {
        const imagePath = this.fileService.createFile(file_service_1.FileType.IMAGE, image);
        const company = await this.companyModel.create(Object.assign(Object.assign({}, dto), { image: imagePath }));
        return company;
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_schema_1.Company.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_service_1.FileService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map