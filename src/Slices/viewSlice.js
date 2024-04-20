import { createSlice } from "@reduxjs/toolkit";

const initialState={view:"desktop"}


const viewSlice = createSlice({
    name:'categorySlice',
    initialState:initialState,
    reducers:{
        setView:(state,action)=>{
            state.view = action.payload;
            return state;
        }
    }
})

export const {setView} = viewSlice.actions;
export default viewSlice.reducer