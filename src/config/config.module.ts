import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

// custom
import { databaseConfig } from './database.config';

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true, // Makes the module globally available
            load: [ databaseConfig], // Load custom configuration files
            envFilePath: ['.env'], // Define environment file paths
            validationSchema: Joi.object({
                DATABASE_URI_LOCAL : Joi.string().required(),
                DATABASE_DB_LOCAL  : Joi.string().required(),
                JWT_SECRET: Joi.string().required(),
                JWT_EXPIRATION: Joi.string().required(),
            }),
        }),
    ],
})
export class ConfigModule {}
