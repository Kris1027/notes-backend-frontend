const Note = require('../../db/models/note');

class noteActions {
  saveNote(req, res) {
    const newNote = new Note({
      title: 'Zrobić zakupy',
      body: 'mleko, jajka, woda',
    });
    newNote.save().then(() => {
      console.log('notatka została zapisana');
    });

    res.send('Strona główna działa');
  }

  getAllNotes(req, res) {
    // pobieranie notatek
    res.send('API działa');
  }

  getNote(req, res) {
    // pobieranie konkretnej notatki
    res.send('Info o notatce');
  }

  updateNote(req, res) {
    // aktualizowanie notatki
    res.send('...');
  }

  deleteNote(req, res) {
    // usuwanie notatki
    res.send('...');
  }
}

module.exports = new noteActions();
