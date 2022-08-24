import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

export const getTypeOrmConfig = async (
	configService: ConfigService
): Promise<TypeOrmModuleOptions> => ({
	type: 'postgres',
	host: configService.get<string>('DB_HOST'),
	port: configService.get<number>('DB_PORT'),
	database: configService.get<string>('DB_NAME'),
	username: configService.get<string>('DB_USERNAME'),
	password: configService.get<string>('DB_PASSWORD'),
	autoLoadEntities: true,
	synchronize: true
})

// export const getTypeOrmConfig = async (
// 	configService: ConfigService
// ): Promise<TypeOrmModuleOptions> => ({
// 	type: 'postgres',
// 	host: 'localhost',
// 	port: 5432,
// 	database: 'youtobe-db',
// 	username: 'postgres',
// 	password: '654321',
// 	autoLoadEntities: true,
// 	synchronize: true
// })
