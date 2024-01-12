const sequelize = require('../config/connection');
const { User, Reviews, Comments } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => { // Asynchronus because we want to have users before blogs and comments because they have relationships
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, { // Create the users
      individualHooks: true,
      returning: true,
    });

    process.exit(0);
  };
  
seedDatabase();