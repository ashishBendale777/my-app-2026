import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./UserSlice";

const MainStore = configureStore({
    reducer: {
        user: UserReducer
    }
})

export default MainStore;