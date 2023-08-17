import { useState } from "react"
import { useDispatch } from "react-redux";

import { createNote } from "../Redux/Features/notes-slice";


export const CreateNotes = () => {
    const [noteInput, setNoteInput] = useState("");
    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(!noteInput){
            alert("Please provide your input!");
            return;
        }
        dispatch(createNote(noteInput))
        setNoteInput("")
    }

    return (
        <div className="create-note-div">
            <h1>Create a note</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Add your note" value={noteInput} onChange={(e) => setNoteInput(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}