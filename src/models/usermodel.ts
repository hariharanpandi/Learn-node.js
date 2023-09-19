import { DataTypes } from "sequelize";
import connectToDB from "../database/mysql";

const UsersSchema =  connectToDB.define('user',{
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    user_img: {
        type: DataTypes.STRING
    }
});

export default UsersSchema;
