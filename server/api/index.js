//this files serves as a table of contents for all my routes
//essentially this file will check the routes of any requests and route
//them to the right file


const express = require('express')
const router = express.Router()

//once we hit this line, any requests that come through here deal with /tvshows
router.use('/tvshows', require('./tvseries'))

module.exports = router