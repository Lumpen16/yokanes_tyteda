"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const path = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const app_controller_1 = require("./app.controller");
const dish_module_1 = require("./dish/dish.module");
const config_1 = require("@nestjs/config");
const file_module_1 = require("./file/file.module");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const oder_module_1 = require("./order/oder.module");
const company_module_1 = require("./company/company.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env' }),
            serve_static_1.ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, '..', 'out') }),
            mongoose_1.MongooseModule.forRoot(process.env.NEWMONGODBPROD),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            file_module_1.FileModule,
            dish_module_1.DishModule,
            oder_module_1.OrderModule,
            company_module_1.CompanyModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map