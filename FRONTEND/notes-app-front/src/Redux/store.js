import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './Features/notes-slice';

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})