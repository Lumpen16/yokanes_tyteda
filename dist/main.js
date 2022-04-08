"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const PORT = process.env.PORT || 8080;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('TytEda')
        .setDescription('Documentation REST API')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => {
        console.log(`Server started on port:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map