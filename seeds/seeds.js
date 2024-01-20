const sequelize = require('../config/connection');
const { User, Reviews, Comments, Books } = require('../models');

const userData = require('./userData.json');
const reviewsData = require('./reviewsData.json');
const commentsData = require('./commentsData.json');
const booksData = require('./booksData.json');

const seedDatabase = async () => { // Asynchronus because we want to have users before blogs and comments because they have relationships
    await sequelize.sync({ force: true });
      
    const books = await Books.bulkCreate(booksData); // create books

    const users = await User.bulkCreate(userData, { // Create the users
      individualHooks: true,
      returning: true,
      books_id: books[Math.floor(Math.random() * books.length)].id,
    });


    for (const review of reviewsData) { 
      await Reviews.create({ // Create the reviews
        ...review,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        book_id: books[Math.floor(Math.random() * books.length)].id,
      });
    }

    const reviews = await Reviews.findAll(); // get the reviews

    for (const comment of commentsData) {
      await Comments.create({ // Create the comments
        ...comment,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        reviews_id: reviews[Math.floor(Math.random() * reviews.length)].id,
      });
    }

    process.exit(0);
  };
  
seedDatabase();