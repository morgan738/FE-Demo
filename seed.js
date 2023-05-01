//this file is where we add data into our database

//i need to get referenes to my database and the tables in it
const {db, TvShows} = require('./db')

//this function will create data in my db
async function syncDB(){
    try {
        //tell our db to sync up. force true means that every time we sync, it will
        //drop the old table and create a new one
        await db.sync({force: true})
        
        //creating our data....
        await TvShows.create({
            name: 'Brooklyn 99',
            genre: 'Comedy',
            network: 'ABC',
            seasons: 9
        })

        await TvShows.create({
            name: 'The Office',
            genre: "Comedy",
            network: "No Idea",
            seasons: 12
        })

        await TvShows.create({
            name: 'South Park',
            genre: "Comedy",
            network: "No Idea",
            seasons:26
        })

        await TvShows.create({
            name: 'The Expanse',
            genre: "Sci-Fi",
            network: "SyFy/Amazon",
            seasons: 6
        })

        await TvShows.create({
            name: 'Breaking Bad',
            genre: "Drama",
            network: "AMC",
            seasons: 6
        })



        console.log("Created all tvshows...")


    } catch (error) {
        console.log(error)
    }finally{
        //when we are done, tell our db to stop syncing
        await db.close()
        console.log("Closed db connection")
    }
}

//invoke the syncDB function
syncDB()