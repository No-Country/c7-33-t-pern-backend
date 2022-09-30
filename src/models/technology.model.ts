import { Table, Model, Column } from 'sequelize-typescript'
import { Optional } from 'sequelize/types'

// interface model technology
export interface TechnologyAttributes{
  id: number
  name: string
}

interface TechnologyCreationAttributes extends Optional<TechnologyAttributes, 'id'>{}

@Table
export default class Technology extends Model<TechnologyAttributes, TechnologyCreationAttributes> {
  @Column
  name!: string
}
