//lib
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
    MongooseModule.forRootAsync({
        useFactory: (configService: ConfigService) => ({
            uri: configService.get('DATABASE_URI_LOCAL')+"/"+configService.get('DATABASE_DB_LOCAL'),
        }),
        inject: [ConfigService],
    }),
    ],
})
export class DatabaseModule {
    static forFeature(models: ModelDefinition[]) {
        return MongooseModule.forFeature(models);
    }
}
