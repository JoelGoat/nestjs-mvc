import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common'

import { PostsService } from './posts.service'
import { PostsDTO } from './posts.dto'

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getPosts() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.postsService.getPosts(),
    }
  }

  @Post()
  async createPost(@Body() data: PostsDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Post added successfully',
      data: await this.postsService.createPost(data),
    }
  }

  @Get(':id')
  async getPost(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.postsService.getPost(id),
    }
  }

  @Put(':id')
  async updatePost(@Param('id') id: number, @Body() data: Partial<PostsDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Post update successfully',
      data: await this.postsService.updatePost(id, data),
    }
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    await this.postsService.deletePost(id)
    return {
      statusCode: HttpStatus.OK,
      message: 'Post deleted successfully',
    }
  }
}
