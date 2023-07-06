import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterDto } from 'src/form/dto/filter-form.dto';
import { AddProducttoCategory } from 'src/products/dto/add-category.dto';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { Category } from 'src/typeorm/entities/Category';
import { Products } from 'src/typeorm/entities/Products';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products) private productRepository: Repository<Products>,
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
    ){}

    async getAllProducts(filterProducts: FilterDto){
        console.log(filterProducts)
        const data = this.productRepository.createQueryBuilder('products')
        .innerJoinAndSelect('products.category','category.products')
        .limit(filterProducts.limit).offset(filterProducts.skip)
        return await data.getMany();
    }

    async getProductsRaw(){
        let data = await this.productRepository.query(`SELECT 
        products.id, products.product_name, category.id as "cat_id", category.category 
        FROM products  
        INNER JOIN category
        ON category.id = products.categoryId
        `)
        for(let record of data){
            record["category"] = {"id":record.cat_id, "category":record.category}
            delete record.cat_id
        }
        console.log(data)
        return data;
    }

    async addToCategory(categoryDetails: AddProducttoCategory){
        const product = await this.productRepository.findOneBy({id: categoryDetails.product_id})
        const category = await this.categoryRepository.findOneBy({id: categoryDetails.category_id})
        if(!product || !category){
            throw new HttpException('cant find id', HttpStatus.BAD_REQUEST)
        }
        product.category = category;
        const data = await this.productRepository.save(product);
        return data;

    }

    async createAProduct(productDetails: Products){
        const product = productDetails
        console.log(product)
        const productCreate = this.productRepository.create(product)
        let data = await this.productRepository.save(productCreate)
        const category = await this.categoryRepository.findOneBy({id: productDetails.category_id})
        if(!category){
            throw new HttpException('Cannot find category id', HttpStatus.BAD_GATEWAY)
        }
        data.category = category;
        data = await this.productRepository.save(data)

        return data;

    }
}
