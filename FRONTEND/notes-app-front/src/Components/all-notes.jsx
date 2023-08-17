import { deleteNoteAsync } from '../Redux/Features/notes-slice';
import PropTypes from 'prop-types'

export const AllNotes = ({ notes, dispatch }) => {
    
    return (
        <div>
            <h1>All Notes</h1>
            {
               notes && notes.map((note) => (
                    <div key={note.id} className='all-notes-div-map'>
                        <h3>{note.note}</h3>
                        <button onClick={()=> dispatch(deleteNoteAsync(note.id))}>x</button>
                    </div>
                ))
            }
        </div>
    )
}

AllNotes.propTypes = {
    notes: PropTypes.array,
    dispatch: PropTypes.func
}

