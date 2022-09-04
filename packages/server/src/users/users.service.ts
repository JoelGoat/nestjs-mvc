import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UsersEntity } from './users.entity'
import { UsersDTO } from './users.dto'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>) {}

  async getUsers() {
    return await this.usersRepository.find()
  }

  async createUser(data: UsersDTO) {
    const user = this.usersRepository.create(data)
    await this.usersRepository.save(data)
    return user
  }

  async getUser(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } })
  }

  async updateUser(id: number, data: Partial<UsersDTO>) {
    await this.usersRepository.update({ id }, data)
    return await this.usersRepository.findOneBy({ id })
  }

  async deleteUser(id: number) {
    await this.usersRepository.delete({ id })
    return { deleted: true }
  }
}
