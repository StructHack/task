import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserController } from './controller/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Task } from 'src/typeorm/entities/Task';

@Module({
  imports:[TypeOrmModule.forFeature([User, Task])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
