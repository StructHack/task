import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "puppeteer";
import { Products } from "./Products";

@Entity({name: 'category'})
export class Category{
    @PrimaryGeneratedColumn()
    @ApiProperty({
        description: "id of the task to put in category",
        example: 1
    })
    id:number

    @Column({unique:true})
    @ApiProperty({
        description: "category name goes here",
        example: "morning tasks"
    })
    category:string

    @OneToMany(()=>Task,(task)=>task.id)
    tasks:Task[]
    
    @OneToMany(()=>Products, (product)=>product.category)
    products:Product[]
}