import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setAuth } from '../../api/authApi'

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
    try {
        return await setAuth()
      } catch (err) {
        return console.log(err)
      }
})

const initialState = {
    isAuthenticated: false
}
const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers : 
    {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        }
    },
    extraReducers : (builder) => {
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            if(action.payload) {
                state.isAuthenticated = true
            } else {
                state.isAuthenticated = false
            }
        } )
    }
})

export const {login, logout} = authslice.actions
export default authslice.reducer