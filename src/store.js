import { combineReducers,configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
// import langSliceReducer from "./Slices/langSlice";
// import sideBarSliceReducer from "./Slices/sideBarSlice";
import categorySliceReducer from "./Slices/categorySlice";
import persistStore from "redux-persist/es/persistStore";
import viewSliceReducer from "./Slices/viewSlice";


const persistConfig = {
    key:'root',
    storage
}

const rootReducer = combineReducers({
    categorySlice:categorySliceReducer,
        viewSlice:viewSliceReducer,
        // sideBarSlice:sideBarSliceReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer);


export const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store)