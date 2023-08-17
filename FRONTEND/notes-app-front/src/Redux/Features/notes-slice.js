import { createSlice } from "@reduxjs/toolkit";
import { createNew, deleteNew, getAllNotes } from "../../Services/services";


const noteSlice = createSlice({
    name: "notes",
    initialState: [],
    reducers: {
        setNotes: (state, action) => {
            return action.payload; 
        },
        appendNote(state, action) {
            state.notes.push(action.payload)
        },
        deleteNote(state, action){
            state.notes = state.notes.filter((note) => note.id !== action.payload)
        } 
    }    
});

export const initializeNotes = () => {
    return async (dispatch) => {
        const allNotes = await getAllNotes();
        dispatch(setNotes(allNotes));
    }
}

export const createNote = (note) => {
    return async dispatch => {
        const newNote = await createNew(note);
        dispatch(appendNote(newNote))
    }
}

export const deleteNoteAsync = (id) => {
    return async dispatch => {
        const newNote = await deleteNew(id);
        dispatch(deleteNote(newNote))
    }
}

export const { setNotes, deleteNote, appendNote } = noteSlice.actions;
export default noteSlice.reducer;