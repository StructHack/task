import { Body, Controller, Get, Post, Query, Req, UseInterceptors } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { CategoryService } from 'src/category/services/category/category.service';
import { FilterDto } from 'src/form/dto/filter-form.dto';
import { FormInterceptor } from 'src/interceptors/form-interceptor';
import { Category } from 'src/typeorm/entities/Category';
@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}
    @Get()
    @UseInterceptors(FormInterceptor)
    @ApiOperation({summary: 'Gets all the categories'})
    @ApiCreatedResponse({
        description: "gets all the categories",
        type: Category
    })
    getCategories(@Req() req: Request, @Query() filterCategories: FilterDto){
        return  this.categoryService.getAllCategories(filterCategories)
    }

    @Post()
    @ApiOperation({summary: 'Creates a category'})
    @ApiCreatedResponse({
        description: "Created a category",
        type: Category
    })
    createCategories(@Body() catagories:CreateCategoryDto){
        return this.categoryService.createAcategory(catagories)
    }

}
