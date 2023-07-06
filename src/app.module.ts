import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module';
import { Task } from './typeorm/entities/Task';
import { ConfigModule } from '@nestjs/config/dist';
import { User } from './typeorm/entities/User';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { Category } from './typeorm/entities/Category';
import { ProductsModule } from './products/products.module';
import { Products } from './typeorm/entities/Products';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    entities: [Task, User, Category, Products],
    synchronize: true
  }), FormModule, UserModule, CategoryModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
