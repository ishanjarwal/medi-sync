import { configureStore } from "@reduxjs/toolkit"
import adminReducer from '@/features/admin/slice.js'

export const store = configureStore({
    reducer: {
        admin: adminReducer
    }
})