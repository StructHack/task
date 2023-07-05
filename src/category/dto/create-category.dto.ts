import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto{
    @ApiProperty({
        description: "name of the category",
        example: "morning work"
    })
    category:string;
}