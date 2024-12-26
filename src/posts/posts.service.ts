// lib
import { Injectable } from '@nestjs/common';

// custom
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(
    private readonly PostRepository: PostRepository,
  ) {}

  create(
    createPostsDto: CreatePostDto,
    // { email, _id: userId }: UserDto,
  ) {
    return this.PostRepository.create({
      ...createPostsDto,
      userId : "123",
      createdAt : new Date(),
      updatedAt : new Date(),
    });
  }

  findAll() {
    return this.PostRepository.find({});
  }

  findOne(_id: string) {
    return this.PostRepository.findOne({ _id});
  }

  update(_id: string, updatePostsDto: UpdatePostDto) {
    return this.PostRepository.findOneAndUpdate(
      { _id },
      { $set : { ... updatePostsDto , updatedAt : new Date() } }
    );
  }

  remove(_id: string) {
    return this.PostRepository.findOneAndDelete({_id});
  }
}
