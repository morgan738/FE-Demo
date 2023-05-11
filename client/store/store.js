import { configureStore } from "@reduxjs/toolkit";
import allShowsSlice from "./allShowsSlice";
import singleShowSlice from "./singleShowSlice";

const store = configureStore({
    reducer: {
        //This is where all my slices go
        allShows: allShowsSlice,
        singleShow: singleShowSlice
    }
})

export default store