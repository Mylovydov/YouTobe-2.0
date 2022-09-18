"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_crud_options_1 = require("./global.crud-options");
const crud_1 = require("@nestjsx/crud");
crud_1.CrudConfigService.load(global_crud_options_1.globalCrudOptions);
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./httpException/http-exception.filter");
const validation_pipe_1 = require("./pipes/validation.pipe");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors();
    app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'));
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const PORT = configService.get('PORT');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Youtobe 2.0')
        .setDescription('description')
        .setVersion('1.0')
        .addTag('youtobe')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map