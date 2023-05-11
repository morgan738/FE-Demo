import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Homepage";
import AllShows from "./AllShows";
import SingleShow from "./SingleShow";


const App = () => {

    return(
        <div>
            <nav>
                <Link to="/"> <h3>HomePage</h3></Link>
                <Link to="/allShows"><h3>All Shows</h3></Link>
            </nav>


            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/allShows" element={<AllShows/>}/>
                    <Route path="/allShows/:id" element={<SingleShow/>}/>
                </Routes>

            </div>

        </div>
    )
}


export default App