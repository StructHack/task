import { Controller, Get, Post, Put, Delete, Body, Param,ParseIntPipe, Query, UseInterceptors, Req, Res} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFormDto } from 'src/form/dto/create-form.dto';
import { UpdateFormDto } from 'src/form/dto/update-form.dto';
import { FormInterceptor } from 'src/form/interceptors/form-interceptor';
import { FormService } from 'src/form/services/form/form.service';
import { Task } from 'src/typeorm/entities/Task';
import { Request } from "express";
import { FilterDto } from 'src/form/dto/filter-form.dto';

@ApiTags('Forms')
@Controller('forms')
export class FormController {
    constructor(private formService: FormService){}
    @Get()
    @UseInterceptors(FormInterceptor)
    @ApiQuery({
        name: 'limit',
        description: 'limit the number of tasks'
    })
    @ApiQuery({
        name: 'skip',
        description: 'Skip the number of tasks'
    })
    @ApiCreatedResponse({
        description: 'Get limited tasks',
        type: Task
    })
    @ApiOperation({summary: 'This endpoint fetches the resources'})
    async getSomeTask(@Req() req: Request, @Query() filterTask: FilterDto){
        console.log(filterTask)
        const data = await this.formService.findTasks(filterTask)
        return data
    }

    @Post()
    @ApiCreatedResponse({
        description: 'Creted a task',
        type: Task
    })
    @ApiOperation({summary: 'Tasks can be posted/created from this endpoint'})
    async createATask(@Body() taskDetails: CreateFormDto){
        const data = await this.formService.createTask(taskDetails);
        return data;
    }

    @Put(":id")
    @ApiOperation({summary: 'Tasks can be edited with specific #id from this endpoint'})
    @ApiCreatedResponse({
        description: 'Updated a task'
    })
    async updateATask(@Param('id', ParseIntPipe) id: number, @Body() newTaskDetails: UpdateFormDto){
        const data = await this.formService.updateTask(id, newTaskDetails);
        return data;
    }

    @Delete(':id')
    @ApiOperation({summary: 'Tasks can be deleted with specific #id from this endpoint'})
    @ApiProperty({
        description: 'id of the task to be delted',
        example: '1'
    })
    @ApiCreatedResponse({
        description: 'Deleted a task'
    })
    DeleteATask(@Param('id', ParseIntPipe) id: number){
        return this.formService.deleteTask(id)
    }
}
