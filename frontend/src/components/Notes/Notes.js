import NewNote from './Note/NewNote';
import Note from './Note/Note';
import { useEffect, useState } from 'react';

import axios from '../../axios';

export default function Notes() {
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
    const res = await axios.post('/notes', note);
    const newNote = res.data;
    notes.push(newNote);
    setNotes(updatedNotes);
  }

  async function handleDeleteNote(_id) {
    await axios.delete(`/notes/${_id}`);
    const updatedNotes = notes.filter((note) => note._id !== _id);
    setNotes(updatedNotes);
  }

  return (
    <div>
      <p>Moje notatki:</p>

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
