import {createSlice} from '@reduxjs/toolkit'

const initialState = { banners:[] }

const bannerslice = createSlice({
    name:"banner",
    initialState: initialState,
    reducers:[
        {

        }
    ]
})

export const {} = bannerslice.actions
export default bannerslice.reducer