import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { CategoryService } from 'src/category/services/category/category.service';
import { Category } from 'src/typeorm/entities/Category';
@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}
    @Get()
    @ApiOperation({summary: 'Gets all the categories'})
    @ApiCreatedResponse({
        description: "gets all the categories",
        type: Category
    })
    getCategories(){
        return  this.categoryService.getAllCategories()
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
