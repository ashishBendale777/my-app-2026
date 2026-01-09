import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const newItem = { ...action.payload, quantity: 1 }
            state.cartItems = [...state.cartItems, newItem]
        },
        increaseQuantity: (state, action) => {
            const pItem = state.cartItems.find((item) => item.id === action.payload.prodid)
            pItem.quantity += 1
        },
        decreaseQuantity: (state, action) => {
            const pItem = state.cartItems.find((item) => item.id === action.payload.prodid)
            pItem.quantity -= 1
        },
        calculateTotal: (state) => {
            let total = 0
            state.cartItems.forEach((item) => {
                total += item.price * item.quantity
            })
            state.totalAmount = total
        }
    }
})

export const { addtoCart, increaseQuantity, decreaseQuantity, calculateTotal } = CartSlice.actions
export default CartSlice.reducer