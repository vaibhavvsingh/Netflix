import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn : false },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn=true;
            return state;
        },
        logout: (state, action) => {
            state.isLoggedIn=false;
            return state;
        }
    }
})

export default userSlice.reducer;
export const {login, logout} =  userSlice.actions;