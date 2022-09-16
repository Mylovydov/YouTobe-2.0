"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./pipes/validation.pipe");
const config_1 = require("@nestjs/config");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors();
    app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'));
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    const PORT = configService.get('PORT');
    await app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map