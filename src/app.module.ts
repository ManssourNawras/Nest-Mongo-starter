// lib
import { Module } from '@nestjs/common';
// import { ConfigModule as NestConfigModule } from '@nestjs/config';
// import * as Joi from 'joi';

// custom
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}