const db = require('./db')
const TvShows = require('./TvSeries')

//This is a good place to form associations
//for example: TvShows.belongsTo(Network)

module.exports= {
    db,
    TvShows
}