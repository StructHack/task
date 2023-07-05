import { Injectable , HttpException,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { Category } from 'src/typeorm/entities/Category';
import { Task} from 'src/typeorm/entities/Task';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor( 
        @InjectRepository(Task) private taskRepository: Repository<Task>,
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ){}
    async getAllCategories(){
        const data = this.categoryRepository.find()
        return data; 
    }

    async createAcategory(createCategories:CreateCategoryDto){
        const {category} = createCategories
        const newCategory = this.categoryRepository.create({category})
        const saveCategory = await this.categoryRepository.save(newCategory)
        return saveCategory
    }

}
