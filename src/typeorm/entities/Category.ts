import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'category'})
export class Category{
    @PrimaryGeneratedColumn()
    @ApiProperty({
        description: "id of the task to put in category",
        example: 1
    })
    id:number

    @Column()
    @ApiProperty({
        description: "category name goes here",
        example: "morning tasks"
    })
    category:string

    @OneToMany(()=>Task,(task)=>task.id)
    tasks:Task[]    
}