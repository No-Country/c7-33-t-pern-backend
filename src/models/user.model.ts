import { ModelDefined } from 'sequelize/types'
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

export default User
