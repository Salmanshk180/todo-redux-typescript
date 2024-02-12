import {configureStore} from '@reduxjs/toolkit' 
import { todosReducers } from './todosSlice';

const store = configureStore({
    reducer:{
        todo : todosReducers
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch