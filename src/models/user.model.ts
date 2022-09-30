<<<<<<< Updated upstream
import { ModelDefined } from 'sequelize/types'
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
import { db, DataTypes } from '../utils/database.util'
import { UserAttributes, UserCreationAttributes } from '../interfaces/types'

const User: ModelDefined<UserAttributes, UserCreationAttributes> = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('client', 'admin'),
    defaultValue: 'client',
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  avatar: DataTypes.STRING
})

<<<<<<< Updated upstream
export default User
=======
export { User }
=======
import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript'
import { Optional } from 'sequelize/types'

export enum UserStatus{
  active='active',
  inactive='inactive'
}

// interface model usuarios
export interface UserAttributes{
  id: number
  email: string
  password: string
  status: UserStatus
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' > {}
@Table
export default class User extends Model<UserAttributes, UserCreationAttributes> {
  @AllowNull(false)
  @Column
  email!: string

  @AllowNull(false)
  @Column
  password!: string

  @Column({
    type: DataType.ENUM(...Object.values(UserStatus)),
    defaultValue: UserStatus.active,
    allowNull: false
  })
  status!: UserStatus
}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
