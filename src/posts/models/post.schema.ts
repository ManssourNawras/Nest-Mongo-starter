// lib
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

// custom
import { AbstractDocument } from 'src/database/abstract.schema';

@Schema({ collection: 'posts', versionKey: false })
export class PostDocument extends AbstractDocument {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  breif: string;

  @Prop({ required: true })
  description: string;

  @Prop({ index: true, required: true })
  userId: string;
}

export const PostSchema = SchemaFactory.createForClass(PostDocument);