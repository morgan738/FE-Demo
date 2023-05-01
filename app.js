//this file is where we make our express server

const express = require('express')
//morgan is a logging middleware
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'))

//this is our body parser
app.use(express.urlencoded({extended: false}))

//this is the first step in our route
app.use(require("./api/index"))

//this opens up a server on port 3000
app.listen(3000, () => {
    console.log(`Started listening on port 3000`)
})