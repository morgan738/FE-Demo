//this file is where we store all of our db and table exports
//it serves as a table of contents, any time we want to require db or a table
//we can require it from here

const db = require('./db')
const TvShows = require('./TvSeries')

//This is a good place to form associations
//for example: TvShows.belongsTo(Network)

module.exports= {
    db,
    TvShows
}