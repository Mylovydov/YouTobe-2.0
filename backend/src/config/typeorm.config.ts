import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

export const getTypeOrmConfig = async (
	configService: ConfigService
): Promise<TypeOrmModuleOptions> => {

	return {
		type: 'postgres',
		host: configService.get<string>('DB_HOST'),
		port: configService.get<number>('DB_PORT'),
		database: configService.get<string>('POSTGRES_DB'),
		username: configService.get<string>('POSTGRES_USER'),
		password: configService.get<string>('POSTGRES_PASSWORD'),
		autoLoadEntities: true,
		synchronize: true
	}
}