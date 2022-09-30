import { AllowNull, Column, Model, Table } from 'sequelize-typescript'
import { Optional } from 'sequelize/types'

// interface model branch
export interface BranchAttributes{
  id: number
  name: string
}

interface BranchCreationAttributes extends Optional<BranchAttributes, 'id' >{}

@Table
export default class Branch extends Model<BranchAttributes, BranchCreationAttributes> {
  @AllowNull(false)
  @Column
  name!: string
}
