import { Injectable , HttpException,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { FilterDto } from 'src/form/dto/filter-form.dto';
import { Category } from 'src/typeorm/entities/Category';
import { Task} from 'src/typeorm/entities/Task';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor( 
        @InjectRepository(Task) private taskRepository: Repository<Task>,
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ){}
    async getAllCategories(filterCategories:FilterDto){
        const data = await this.categoryRepository
                    .createQueryBuilder('category')
                    .limit(filterCategories.limit)
                    .offset(filterCategories.skip)
                    .getMany()
                    console.log(data)
        return data; 
    }

    async createAcategory(createCategories:CreateCategoryDto){
        const {category} = createCategories
        const newCategory = this.categoryRepository.create({category})
        const saveCategory = await this.categoryRepository.save(newCategory)
        return saveCategory
    }

}
