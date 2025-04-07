import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSaleProducts } from "../homeApi";

export const getSale =  createAsyncThunk("homeSaleProducts/getSale", async () => {
  try {
    return await getSaleProducts()
  } catch(e) {
    console.log(e)
  }
})

const initialState = {
    saleProducts : [
        {
            imageUr: '',
            name: '',
            description:''
        }
    ]
}

const homeSaleProductsslice = createSlice({
    name: 'homeSaleProducts',
    initialState: initialState,
    reducers: [{}],
    extraReducers: (builder) => {
      builder.addCase(getSale.fulfilled,(state, action) => {
        state.saleProducts = action.payload
      })
    }
  })

export default homeSaleProductsslice.reducer