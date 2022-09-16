import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from './pipes/validation.pipe'
import { ConfigService } from "@nestjs/config";
import { HttpExceptionFilter } from "./httpException/http-exception.filter";

async function start() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService);
	app.enableCors()
	app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'))
	app.useGlobalPipes(new ValidationPipe())
	// app.useGlobalFilters(new HttpExceptionFilter())
	const PORT = configService.get('PORT')

	await app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
}
start()
