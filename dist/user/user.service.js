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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const file_service_1 = require("../file/file.service");
const user_schema_1 = require("./schemas/user.schema");
const bcrypt = require("bcryptjs");
let UserService = class UserService {
    constructor(userModel, fileService) {
        this.userModel = userModel;
        this.fileService = fileService;
    }
    async addImage(id, image) {
        const imagePath = this.fileService.createFile(file_service_1.FileType.IMAGE, image);
        const user = await this.userModel.findById(id);
        user.image = imagePath;
        user.save();
        return user;
    }
    async findOne(username) {
        return await this.userModel.findOne({ username: username });
    }
    async createUser(dto) {
        const consdition = await this.userModel.findOne({
            email: dto.email,
            include: { all: true },
        });
        if (consdition) {
            throw new common_1.HttpException('not valuble email', common_1.HttpStatus.BAD_REQUEST);
        }
        const hastpassword = await bcrypt.hash(dto.password, 10);
        const user = await this.userModel.create(Object.assign(Object.assign({}, dto), { password: hastpassword }));
        return user;
    }
    async addOwner(id, ownerId) {
        const user = await this.userModel.findById(id);
        user.owner = ownerId;
        user.save();
        return user;
    }
    async addCompany(id, companyId) {
        const user = await this.userModel.findById(id);
        user.company = companyId;
        user.save();
        return user;
    }
    async getAll(count = 10, offset = 1) {
        const dish = await this.userModel
            .find()
            .skip(Number(offset))
            .limit(Number(count));
        return dish;
    }
    async getOne(id) {
        const user = this.userModel.findById(id);
        return user;
    }
    async search(query) {
        return await this.userModel.find({
            username: query,
        });
    }
    async delete(id) {
        try {
            const user = await this.userModel.findById(id);
            user.delete();
        }
        catch (e) {
            return null;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_service_1.FileService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map