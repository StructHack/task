import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'products'})
export class Products{
    @PrimaryGeneratedColumn()
    id:number
    
    @ApiProperty({description:"product name goes here",example:"milk"})
    @Column()
    product_name: string

        
    @ApiProperty({
        description: "number of products",
        example:2
    })
    @Column()    
    product_number: number

    @ApiProperty({
        description: "size of the product",
        example:"XL"
    })
    @Column() 
    product_size: string
    @ApiProperty({
        description: "Category Id",
        example:2
    })
    category_id: number

    @ManyToOne(()=>Category, (category)=>category.products)
    @JoinColumn()
    category:Category
}