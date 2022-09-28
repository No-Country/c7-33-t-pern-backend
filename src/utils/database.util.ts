import { Sequelize, DataTypes } from 'sequelize'
import * as dotenv from 'dotenv'
import { DataBase } from '../interfaces/types'

dotenv.config({ path: './config.env' })

const server: DataBase = {
  host: process.env.DB_HOST ?? '',
  name: process.env.DB ?? '',
  password: process.env.DB_PASSWORD ?? '',
  port: Number(process.env.DB_PORT ?? ''),
  user: process.env.DB_USERNAME ?? ''
}

// Establish db connection
const db = new Sequelize(
  server.name,
  server.user,
  server.password,
  {
    dialect: 'postgres',
    host: server.host,
    port: server.port,
    logging: false
  })

export { db, DataTypes }
