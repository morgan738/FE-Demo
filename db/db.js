//this file opens up a connection to our db using sequelize


const Sequelize = require('sequelize')

//connect to my shows database
//this db variable represent the connection to my database
const db = new Sequelize('postgres://localhost/shows')

//i need to export db so that other files can see db
module.exports = db