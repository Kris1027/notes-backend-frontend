import { useState } from 'react';

export default function NewNote({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addNote = () => {
    const note = {
      title: title,
      body: desc,
    };

    onAdd(note);

    setTitle('');
    setDesc('');
    setShowForm(false);
  };

  return showForm ? (
    <div>
      <label>Tytuł:</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Opis:</label>
      <input
        type='text'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button onClick={addNote}>Dodaj notatkę</button>
    </div>
  ) : (
    <button onClick={() => setShowForm(true)}>dodaj notatkę</button>
  );
}
