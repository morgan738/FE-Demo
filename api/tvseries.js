//this file deals with requests from a /tvshows route

const express = require('express')
const router = express.Router()
//we need to get a reference to the relevant table
const {TvShows} = require("../db")

//GET route --> /tvshows/
//this route returns all tvshows
router.get('/', async (req, res, next) => {
    //remember async await means you want to try catch
    try {
        //sequelize method to findall of our tvshows
        const allShows = await TvShows.findAll()
        //sends the response with a 200 code status
        res.status(200).send(allShows)
    } catch (error) {
        //catch any errors
        next(error)
    }
})

//GET route --> /tvshows/:id
//this route returns a single tvshow
router.get("/:id", async(req,res,next) => {
    //remember async await means you want to try catch
    try {
        //because of the /:id part of the route, req.params is an object with id as a key
        //we store the value of id in a variable
        const singleShowID = req.params.id

        //we get the tv by id
        const singleShow = await TvShows.findByPk(singleShowID)

        //we send the singleshow as a response
        res.send(singleShow)
    } catch (error) {
         //catch any errors
        next(error)
    }
})

//POST route --> /tvshows/
//this route will create a new tvshow and add it to our db
router.post('/', async(req,res,next) => {
    //remember async await means you want to try catch
    try {
        //req.body exists because we added a body parser to app.js
        console.log("This is body --> ", req.body)

        //grab all the data from req.body and destructs them
        const {name, genre, network, seasons} = req.body
        //creates a new show in our db using info from the body
        const newShow = await TvShows.create({
            name: name,
            genre: genre,
            network: network,
            seasons: seasons
        })

        //send the newly created show as a response
        res.send(newShow)
    } catch (error) {
         //catch any errors
        next(error)
    }
})



module.exports = router