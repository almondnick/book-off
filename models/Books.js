const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {}

Books.init(
    {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },

       book_isbn: {
        type: DataTypes.STRING,
       }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "books"
    }
);

module.exports = Books;