import { ApiProperty } from '@nestjs/swagger';
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Task } from './Task';

@Entity({name: 'users'})
export class User{
    @PrimaryGeneratedColumn()
    @ApiProperty({
        description: "id of the person",
        example: "1"
    })
    id: number;

    @Column()
    @ApiProperty({
        description: "Name of the person",
        example: "Dipendra Shrestha"
    })
    name: string;

    @OneToOne(()=>Task)
    @JoinColumn()
    task: Task
}