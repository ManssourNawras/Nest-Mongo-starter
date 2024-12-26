// lib
import { Module } from '@nestjs/common';

// custom
import { DatabaseModule } from 'src/database/database.module';
import { UserDocument, UserSchema } from './models/user.schema';

@Module({
    imports   : [
        DatabaseModule,
        DatabaseModule.forFeature([
            { name: UserDocument.name, schema: UserSchema },
        ]),
    ],
})
export class UsersModule {}
