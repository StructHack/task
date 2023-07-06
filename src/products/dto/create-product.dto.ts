import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto{
    @ApiProperty({
        description: "name of the product",
        example: "chocolate"
    })
    product_name: string
    @ApiProperty({
        description: "Category Id of the product",
        example: "1"
    })
    category_id:number
    
    @ApiProperty({
        description: "number of products",
        example:2
    })    
    product_number: number

    @ApiProperty({
        description: "size of the product",
        example:"XL"
    })
    product_size: string 

    
    
}