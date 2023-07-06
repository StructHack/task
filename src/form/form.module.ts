import { Module } from '@nestjs/common';
import { FormController } from './controller/form/form.controller';
import { FormService } from './services/form/form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/entities/Task';
import { User } from 'src/typeorm/entities/User';
import { Category } from 'src/typeorm/entities/Category';
import { Products } from 'src/typeorm/entities/Products';

@Module({
  imports:[TypeOrmModule.forFeature([Task, User, Category, Products])],
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule {}
