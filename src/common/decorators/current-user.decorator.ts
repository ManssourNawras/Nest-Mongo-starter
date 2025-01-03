// lib
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// custom
import { UserDocument } from 'src/users/models/user.schema';

const getCurrentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);