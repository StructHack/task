import { ApiProperty } from "@nestjs/swagger";

export class AddCategoryDto{
    @ApiProperty({
        description: "Id of the task",
        example: "1",
    })
    task_id: number;
    @ApiProperty({
        description: "Id of the category",
        example: "1",
    })
    category_id: number;
}
