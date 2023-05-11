//in this file, i want to define my TVSeries Table

const Sequelize = require('sequelize')
//this file is my model definition
//any columns for tvshows will be defined here

const db = require('./db')

//we need to use db.define
const TvShows = db.define('tvshows', {
    //defines name column
    name:{
        type: Sequelize.STRING,
        //allownull is a sequelize constraint
        allowNull: false
    },
    //defines genre column
    genre: {
        type: Sequelize.STRING
    },
    //defines network column
    network:{
        type: Sequelize.STRING
    },
    //defines seasons column
    seasons:{
        type: Sequelize.INTEGER
    }
})
//exports the table we just defined
module.exports = TvShows
