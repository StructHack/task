import { Body, Controller, Get, Post, Query, UseInterceptors, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilterDto } from 'src/form/dto/filter-form.dto';
import { FormInterceptor } from 'src/interceptors/form-interceptor';
import { AddProducttoCategory } from 'src/products/dto/add-category.dto';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { ProductsService } from 'src/products/services/products/products.service';
import { Request } from 'express';
import { Products } from 'src/typeorm/entities/Products';
@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}
    @Get()
    @ApiOperation({"summary": "Get all the products with category"})
    @UseInterceptors(FormInterceptor)
    getProducts(@Req() req: Request, @Query() filterProducts:FilterDto){
        return this.productsService.getAllProducts(filterProducts)
    }

    @Get('raw')
    @ApiOperation({"summary": "Get all the products with category with RAW SQL QUERY"})
    getProductsRaw(){
        return this.productsService.getProductsRaw()
    }


    @Post()
    @ApiOperation({"summary": "post a product"})
    createAProduct(@Body() productDetails: Products){
        return this.productsService.createAProduct(productDetails)
    }

    @Post('addToCategory')
    @ApiOperation({"summary": "add product to the category"})
    addtoCategory(@Body() categoryDetails: AddProducttoCategory){
        return this.productsService.addToCategory(categoryDetails)
    }
    
}
