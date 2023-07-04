import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormDto } from 'src/form/dto/create-form.dto';
import { UpdateFormDto } from 'src/form/dto/update-form.dto';
import { Task } from 'src/typeorm/entities/Task';
import { Repository } from 'typeorm';

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>
    ){}

    findTasks(limit: number, skip: number){
       let data;
        data = this.taskRepository.query(`
        SELECT * FROM task_details LIMIT ?,?
        ;
        `,[skip,limit]);
       
        return data;
    }

    createTask(taskDetails: CreateFormDto){
        const newTask = taskDetails;
        const data = this.taskRepository.save(newTask);
        return data
    }

    updateTask(id: number, newTaskDetails: UpdateFormDto){
        return this.taskRepository.update({id},{...newTaskDetails})
    }
    deleteTask(id: number){
        return this.taskRepository.delete({id})
    }
}
