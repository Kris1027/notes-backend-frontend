import EditNote from './Note/EditNote';
import NewNote from './Note/NewNote';
import Note from './Note/Note';
import { useState } from 'react';
import Modal from 'react-modal';

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: '2234',
      title: 'Wykąpać psa',
      body: 'pamiętaj wykąpać psa specjalnym szamponem',
    },
    {
      id: '5644',
      title: 'Zrobić zakupy',
      body: 'kupić masło, mleko, kabanosy',
    },
  ]);

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

  const handleAddNote = (note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
  };

  const handleEditNote = (editedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
    closeModal();
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <p>Moje notatki:</p>

      <NewNote onAdd={(note) => handleAddNote(note)} />

      <Modal isOpen={showEditModal} contentLabel='Edytuj notatkę'>
        <EditNote
          heading={selectedNote.title}
          body={selectedNote.body}
          id={selectedNote.id}
          note={selectedNote}
          onEdit={(editedNote) => handleEditNote(editedNote)}
          onClose={closeModal}
        />
      </Modal>

      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          body={note.body}
          onEdit={() => openModal(note)}
          onDelete={() => handleDeleteNote(note.id)}
        />
      ))}
    </div>
  );
}
