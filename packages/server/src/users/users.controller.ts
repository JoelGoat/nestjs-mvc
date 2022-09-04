import { Controller, Post, Body, Get, Put, Delete, Param, HttpStatus } from '@nestjs/common'

import { UsersService } from './users.service'
import { UsersDTO } from './users.dto'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.usersService.getUsers(),
    }
  }

  @Post()
  async createUser(@Body() data: UsersDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'User added successfully',
      data: await this.usersService.createUser(data),
    }
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.usersService.getUser(id),
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'User update successfully',
      data: await this.usersService.updateUser(id, data),
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.deleteUser(id)
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    }
  }
}
