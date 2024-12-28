// lib
import { Module } from '@nestjs/common';

// custom
import { DatabaseModule } from 'src/database/database.module';
import { PostDocument, PostSchema } from './models/post.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostRepository } from './posts.repository';
// import { UsersModule } from 'src/users/users.module';



@Module({
    imports   : [
        // UsersModule,
        DatabaseModule,
        DatabaseModule.forFeature([
            { name: PostDocument.name, schema: PostSchema },
          ]),
    ],
    controllers: [PostsController],
    providers: [PostsService , PostRepository],
})

export class PostsModule {}
