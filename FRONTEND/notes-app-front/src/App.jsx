import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AllNotes } from './Components/all-notes';
import { CreateNotes } from './Components/create-note';

import './App.css';
import { initializeNotes } from './Redux/Features/notes-slice';

function App() {
  const { notes } = useSelector(state => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  },[dispatch]);


  return (
    <div className='app'>
      <h1>Add Notes App - FullStack</h1>
      <hr />
      <CreateNotes />
      <AllNotes notes={notes} dispatch={dispatch} />
    </div>
  )
}

export default App
