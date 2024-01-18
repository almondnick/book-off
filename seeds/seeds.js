const sequelize = require('../config/connection');
const { User, Reviews, Comments } = require('../models');

const userData = require('./userData.json');
const reviewsData = require('./reviewsData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => { // Asynchronus because we want to have users before blogs and comments because they have relationships
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, { // Create the users
      individualHooks: true,
      returning: true,
    });

    for (const review of reviewsData) { 
      await Reviews.create({ // Create the reviews
        ...review,
        user_id: users[Math.floor(Math.random() * users.length)].id,
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