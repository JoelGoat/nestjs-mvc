import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppService } from './app.service'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { PostsModule } from './posts/posts.module'

import * as ormconfig from './config/ormconfig'

@Module({
  // imports: [TypeOrmModule.forRoot(ormconfig), UsersModule, PostsModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
