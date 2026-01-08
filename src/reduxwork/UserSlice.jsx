import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    isLogin: false
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.userData = action.payload
            state.isLogin = true
        },
        logoutUser: (state) => {
            state.userData = {}
            state.isLogin = false
        }
    }
})

export const { loginUser, logoutUser } = UserSlice.actions
export default UserSlice.reducer