// lib
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// custom
import { AbstractDocument } from 'src/database/abstract.schema';


@Schema({ collection: 'users', versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

}

export const UserSchema = SchemaFactory.createForClass(UserDocument);