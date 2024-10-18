import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 0,
    schedulable: null,
    cancellable: null,

}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setSchedulable: (state, action) => {
            state.schedulable = action.payload;
        },
        resetSchedulable: (state, action) => {
            state.schedulable = null;
        },
        setCancellable: (state, action) => {
            state.cancellable = action.payload;
        },
        resetCancellable: (state, action) => {
            state.cancellable = null;
        }


    },
    extraReducers: (builder) => {

    }

})

export default adminSlice.reducer;
export const { setActiveTab, setSchedulable, setCancellable, resetSchedulable, resetCancellable } = adminSlice.actions;