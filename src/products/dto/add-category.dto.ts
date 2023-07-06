import { ApiProperty } from "@nestjs/swagger";

export class AddProducttoCategory{
    @ApiProperty({
        description: "id of the category that tha product should be added on",
        example: 10
    })
    category_id: number;
    @ApiProperty({
        description: "id of the product",
        example: 10
    })
    product_id:number
}