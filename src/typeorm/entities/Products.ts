import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'products'})
export class Products{
    @PrimaryGeneratedColumn()
    id:number
    
    @ApiProperty({description:"sdfsd"})
    @Column()
    product_name: string

    @ManyToOne(()=>Category, (category)=>category.products)
    @JoinColumn()
    category:Category
}