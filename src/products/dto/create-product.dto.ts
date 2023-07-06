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
}