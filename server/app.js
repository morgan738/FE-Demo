//this file is where we make our express server
const path = require('path')
const express = require('express')
//morgan is a logging middleware
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, '../public')))

//this is our body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//this is the first step in our route
app.use("/api", require("./api/index"))

app.use('/', (req, res, next) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '../public/index.html'))
})




app.use((err,req,res,next) => {
    res.status(404).send(err)
})
  

//this opens up a server on port 3000
app.listen(3000, () => {
    console.log(`Started listening on port 3000`)
})