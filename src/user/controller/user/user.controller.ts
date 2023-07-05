import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('users')
export class UserController {
    constructor(private userService:UserService){}
    @Get()
    getAllUsers(){
        return this.userService.getUsers()
    }

    @Post(':id')
    createAUser(@Body() createUserdto:CreateUserDto, @Param('id') id: number){
        return this.userService.createUsers(createUserdto, +id)
    }

}
