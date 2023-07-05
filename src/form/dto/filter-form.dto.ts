import { ApiProperty } from "@nestjs/swagger";

export class FilterDto{
    @ApiProperty({
        description: "Limit the number of tasks to fetch",
        example: 10
    })
    limit: number;
    @ApiProperty({
        description: "Skip the number of records and then fetch data",
        example: 10
    })
    skip: number;
}