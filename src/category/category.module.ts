import { Module } from '@nestjs/common';
import { CategoryController } from './controller/category/category.controller';
import { CategoryService } from './services/category/category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/entities/Task';
import { Category } from 'src/typeorm/entities/Category';

@Module({
  imports:[TypeOrmModule.forFeature([Task, Category])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
