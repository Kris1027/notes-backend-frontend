import Note from './Note/Note';

export default function Notes() {
  const notes = [
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
  ];

  return (
    <div>
      <p>Moje notatki:</p>

      {notes.map((note) => (
        <Note key={note.id} title={note.title} body={note.body} />
      ))}
    </div>
  );
}
