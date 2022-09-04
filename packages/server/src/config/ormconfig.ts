import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import 'dotenv/config'

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/**.entity{.ts,.js}'],
  synchronize: true,
}

export = config
