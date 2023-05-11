import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleShow } from "../store/singleShowSlice";

const SingleShow = () => {
    const dispatch = useDispatch()
    const {id} = useParams();

    const singleShow = useSelector((state) => {
        console.log("this is state --> ", state.singleShow.singleShow)
        return state.singleShow.singleShow
    })

    useEffect(() => {
        dispatch(fetchSingleShow(id))
    },[])

    return(
        <div>
           <h1>{singleShow.name}</h1>
           <hr/>
           <h3>Genre: {singleShow.genre}</h3>
            <h3>Network: {singleShow.network}</h3>
            <h3>Seasons: {singleShow.seasons}</h3> 

        </div>
    )

}

export default SingleShow