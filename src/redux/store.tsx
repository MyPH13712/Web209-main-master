import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../pages/Cart/cartSlice';
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
export default store; 