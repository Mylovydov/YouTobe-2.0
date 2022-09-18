import { globalCrudOptions } from './global.crud-options'
import { CrudConfigService } from '@nestjsx/crud'

CrudConfigService.load(globalCrudOptions)
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './httpException/http-exception.filter'
import { ValidationPipe } from './pipes/validation.pipe'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function start() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)
	app.enableCors()
	app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'))
	app.useGlobalPipes(new ValidationPipe())
	app.useGlobalFilters(new HttpExceptionFilter())
	const PORT = configService.get('PORT')

	const options = new DocumentBuilder()
		.setTitle('Youtobe 2.0')
		.setDescription('description')
		.setVersion('1.0')
		.addTag('youtobe')
		.build()
	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('api', app, document)

	await app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
}

start()
