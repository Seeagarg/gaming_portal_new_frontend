import { createSlice } from "@reduxjs/toolkit";

const initialState={category:"All Games"}


const categorySlice = createSlice({
    name:'categorySlice',
    initialState:initialState,
    reducers:{
        setCategory:(state,action)=>{
            state.category = action.payload;
            return state;
        }
    }
})

export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer