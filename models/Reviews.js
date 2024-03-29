const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
    {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },
       date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
       },
       book_isbn: {
        type: DataTypes.STRING,
       },
       user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
       },
       favorite_characters: {
        type: DataTypes.STRING,
       },
       favorite_quote: {
        type: DataTypes.STRING,
       },
       thoughts: {
        type: DataTypes.STRING,
       },
       star_review: {
        type: DataTypes.INTEGER,
       },
       spicy_level: {
        type: DataTypes.INTEGER,
       },
       recommend: {
        type: DataTypes.BOOLEAN,
       },
       read_again: {
        type: DataTypes.BOOLEAN,
       },
       format: {
        type: DataTypes.STRING,
       },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "reviews"
    }
);

module.exports = Reviews;