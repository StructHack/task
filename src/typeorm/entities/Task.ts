import { ApiProperty } from '@nestjs/swagger';
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name: 'task_details'})
export class Task{
    @PrimaryGeneratedColumn()
    @ApiProperty({
        description: "id of the task",
        example: "1"
    })
    id: number;

    @Column()
    @ApiProperty({
        description: "title of the task",
        example: "Task 01"
    })
    title: string;

    @Column()
    @ApiProperty({
        description: "Description of the task",
        example: "This is the descipriton of the task"
    })
    description: string;

    @Column()
    @ApiProperty({
        description: "Priority of the task",
        example: "High" 
    })
    type: string

}