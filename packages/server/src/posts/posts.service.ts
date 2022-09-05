import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { PostsEntity } from './posts.entity'

@Injectable()
export class PostsService {
  constructor(@InjectRepository(PostsEntity) private postsRepository: Repository<PostsEntity>) {}

  async getPosts() {
    return await this.postsRepository.find()
  }

  async createPost(data) {
    const post = this.postsRepository.create(data)
    await this.postsRepository.save(data)
    return post
  }

  async getPost(id: number) {
    return await this.postsRepository.findOne({ where: { id: id } })
  }

  async updatePost(id: number, data) {
    await this.postsRepository.update({ id }, data)
    return await this.postsRepository.findOneBy({ id })
  }

  async deletePost(id: number) {
    await this.postsRepository.delete({ id })
    return { deleted: true }
  }
}
