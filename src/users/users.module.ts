// lib
import { Module } from '@nestjs/common';

// custom
import { DatabaseModule } from 'src/database/database.module';
import { UserDocument, UserSchema } from './models/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
    imports   : [
        DatabaseModule,
        DatabaseModule.forFeature([
            { name: UserDocument.name, schema: UserSchema },
        ]),
    ],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository],
    exports: [UsersService],
})
export class UsersModule {}
