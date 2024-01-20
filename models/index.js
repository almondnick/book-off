const User = require('./User');
const Reviews = require('./Reviews');
const Comments = require('./Comments');
const Books = require('./Books')

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

Comments.belongsTo(Reviews, {
    foreignKey: "reviews_id",
    onDelete: "CASCADE",
});

Reviews.hasMany(Comments, {
    foreignKey: "reviews_id",
    onDelete: "CASCADE",
});

Reviews.belongsTo(Books,{
    foreignKey: "book_id",
});

Books.hasMany(Reviews, {
    foreignKey: "book_id",
    onDelete: "CASCADE",
});

User.hasMany(Books, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Books.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { User, Reviews, Comments, Books };