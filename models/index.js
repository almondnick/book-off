const User = require('./User');
const Reviews = require('./Reviews');
const Comments = require('./Comments');

User.hasMany(Reviews, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Reviews.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Comments, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Comments.belongsTo(User, {
    foreignKey: "user_id",
});

Comments.belongsto(Reviews, {
    foreignKey: "reviews_id",
    onDelete: "CASCADE",
});

Reviews.hasMany(Comments, {
    foreignKey: "reviews_id",
    onDelete: "CASCADE",
});

module.exports = { User, Reviews, Comments };