import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/entities/Task';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Task) private taskRepository: Repository<Task> 
    ){}
    async getUsers(createUserdto: CreateUserDto, id:number){
        const task = await this.taskRepository.findOneBy({id});
        console.log(task,'task')
        if(!task){
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        }
        const newUser = this.userRepository.create({...createUserdto})
        const saveUser = await this.userRepository.save(newUser);

        // saveUser.task = task;
        console.log(saveUser,'users')
        const data  =await this.userRepository.create({...createUserdto,task:{id:id}})

        return data;

    }
}
