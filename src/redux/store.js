import { configureStore } from "@reduxjs/toolkit";
import watchReducer from './slice/watches'
import mobileReducer from './slice/mobiles'
export const store = configureStore({
    reducer: {
        watches: watchReducer,
        mobiles: mobileReducer
    }
})