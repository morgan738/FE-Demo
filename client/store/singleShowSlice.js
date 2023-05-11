import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchSingleShow = createAsyncThunk(
    "singleShow", async(showId) => {
        try {
            const {data} = await axios.get(`/api/tvshows/${showId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

const singleShowSlice = createSlice({
    name: "singleShow",
    initialState: {
        singleShow: {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSingleShow.fulfilled, (state, action) => {
            state.singleShow = action.payload
        })
    }
})

export default singleShowSlice.reducer