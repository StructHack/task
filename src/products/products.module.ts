import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Products } from 'src/typeorm/entities/Products';
import { Category } from 'src/typeorm/entities/Category';

@Module({
  imports:[TypeOrmModule.forFeature([Products, Category])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
