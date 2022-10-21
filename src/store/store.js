import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../redusers/slice'
export const store=configureStore({
    reducer:{todoSlice}
}) 