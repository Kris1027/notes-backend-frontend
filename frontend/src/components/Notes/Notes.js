import NewNote from './Note/NewNote';
import Note from './Note/Note';
import { useEffect, useState } from 'react';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import axios from '../../axios';

export default function Notes({ toggleDarkMode, darkMode }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const res = await axios.get('/notes');
      const notes = res.data;
      setNotes(notes);
    }

    fetchNotes();
  }, []);

  async function handleAddNote(note) {
    const updatedNotes = [...notes, note];
    try {
      const res = await axios.post('/notes', note);
      const newNote = res.data;
      notes.push(newNote);
      setNotes(updatedNotes);
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }

  async function handleDeleteNote(_id) {
    await axios.delete(`/notes/${_id}`);
    const updatedNotes = notes.filter((note) => note._id !== _id);
    setNotes(updatedNotes);
  }

  return (
    <div className='flex flex-col justify-center bg-purple-200 dark:bg-purple-950 gap-1 py-10 px-2'>
      <NotificationContainer />

      <h1 className='text-3xl font-bold text-purple-950 dark:text-purple-200 text-center'>
        ToDo List
      </h1>

      <button onClick={toggleDarkMode}>{darkMode ? '🌚' : '🌞'}</button>

      <NewNote onAdd={(note) => handleAddNote(note)} />

      {notes.map((note) => (
        <Note
          key={note._id}
          title={note.title}
          body={note.body}
          _id={note._id}
          onDelete={() => handleDeleteNote(note._id)}
        />
      ))}
    </div>
  );
}
