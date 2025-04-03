import { createSlice } from '@reduxjs/toolkit'

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
    }
})

export const {login, logout} = authslice.actions
export default authslice.reducer