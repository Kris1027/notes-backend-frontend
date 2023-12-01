import { useEffect, useState } from 'react';

export default function EditNote({
  note,
  onEdit,
  onClose,
  heading,
  body,
  _id,
}) {
  const [title, setTitle] = useState(heading);
  const [desc, setDesc] = useState(body);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [note]);

  const editNote = () => {
    const editedNote = {
      ...note,
      title: title,
      body: desc,
      _id: _id,
    };
    onEdit(editedNote);
  };

  return (
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

      <button onClick={onClose}>Anuluj</button>
      <button onClick={editNote}>Zapisz</button>
    </div>
  );
}
