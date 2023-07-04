import { ApiProperty } from "@nestjs/swagger";

export class UpdateFormDto{
    @ApiProperty({
        description: "Title for the task",
        example: "My Task 01"
    })
    title: string;
    @ApiProperty({
        description: "Detailed description of the task",
        example: "I should build a UI for this api and deploy the new code."
    })
    description: string;
    @ApiProperty({
        description: "Priority of the task: High | Low | Moderate",
        example: "High"
    })
    type: string;
}