const Sequelize = require('sequelize')

const sequelize = new Sequelize('groupomania', 'root', 'UO7aMHWPokxLdT6N', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize


// const Sequelize = require('sequelize')

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
// });

// module.exports = sequelize 