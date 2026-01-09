import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./UserSlice";
import CartReducer from "./CartSlice";

const MainStore = configureStore({
    reducer: {
        user: UserReducer,
        cart: CartReducer
    }
})

export default MainStore;