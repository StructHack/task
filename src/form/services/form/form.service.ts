import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCategoryDto } from 'src/form/dto/add-category.dto';
import { CreateFormDto } from 'src/form/dto/create-form.dto';
import { FilterDto } from 'src/form/dto/filter-form.dto';
import { UpdateFormDto } from 'src/form/dto/update-form.dto';
import { Category } from 'src/typeorm/entities/Category';
import { Task } from 'src/typeorm/entities/Task';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
    ){}

    findTasks(params:FilterDto){
       let data;
        data = this.taskRepository.query(`
        SELECT * FROM task_details LIMIT ?,?
        ;
        `,[+params.skip,+params.limit]);
       
        return data;
    }

    createTask(taskDetails: CreateFormDto){
        const newTask = taskDetails;
        const data = this.taskRepository.save(newTask);
        return data
    }

    async addToCategory(categoryDetails: AddCategoryDto){
        const task = await this.taskRepository.findOneBy({id: categoryDetails.task_id})
        const category = await this.categoryRepository.findOneBy({id: categoryDetails.category_id})
        if(!task || !category){
            throw new HttpException('cant find id', HttpStatus.BAD_REQUEST)
        }
        task.category = category;
        const data = this.taskRepository.save(task);
        return data;

        
    }

    updateTask(id: number, newTaskDetails: UpdateFormDto){
        return this.taskRepository.update({id},{...newTaskDetails})
    }
    deleteTask(id: number){
        return this.taskRepository.delete({id})
    }
}
