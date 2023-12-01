import EditNote from './Note/EditNote';
import NewNote from './Note/NewNote';
import Note from './Note/Note';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from '../../axios';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const openModal = (note) => {
    setSelectedNote(note);
    setShowEditModal(true);
  };

  const closeModal = () => {
    setSelectedNote({});
    setShowEditModal(false);
  };

  async function handleAddNote(note) {
    const updatedNotes = [...notes, note];

    const res = await axios.post('/notes', note);
    const newNote = res.data;
    notes.push(newNote);

    setNotes(updatedNotes);
  }

  async function handleEditNote(editedNote) {
    await axios.put(`/notes/${editedNote.id}`, editedNote);

    const updatedNotes = notes.map((note) =>
      note._id === editedNote._id ? editedNote : note
    );
    setNotes(updatedNotes);
    closeModal();
  }

  async function handleDeleteNote(_id) {
    const updatedNotes = notes.filter((note) => note._id !== _id);

    await axios.delete(`/notes/${_id}`);

    setNotes(updatedNotes);
  }

  useEffect(() => {
    async function fetchNotes() {
      const res = await axios.get('/notes');
      const notes = res.data;
      setNotes(notes);
    }

    fetchNotes();
  }, []);

  return (
    <div>
      <p>Moje notatki:</p>

      <NewNote onAdd={(note) => handleAddNote(note)} />

      <Modal isOpen={showEditModal} contentLabel='Edytuj notatkę'>
        <EditNote
          heading={selectedNote.title}
          body={selectedNote.body}
          _id={selectedNote._id}
          note={selectedNote}
          onEdit={(editedNote) => handleEditNote(editedNote)}
          onClose={closeModal}
        />
      </Modal>

      {notes.map((note) => (
        <Note
          key={note._id}
          title={note.title}
          body={note.body}
          _id={note._id}
          onEdit={() => openModal(note)}
          onDelete={() => handleDeleteNote(note._id)}
        />
      ))}
    </div>
  );
}
