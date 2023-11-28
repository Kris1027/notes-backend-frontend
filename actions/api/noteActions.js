const Note = require('../../db/models/note');

class noteActions {
  saveNote(req, res) {
    // const newNote = new Note({
    //   title: 'Zrobić zakupy',
    //   body: 'mleko, jajka, woda',
    // });
    // newNote.save().then(() => {
    //   console.log('Notatka została zapisana');
    // });
    const title = req.body.title;
    const body = req.body.body;

    res.send('Notatka została stworzona. Tytuł:' + title + ' treść:' + body);
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
    res.send('Notatka zaktualizowana');
  }

  deleteNote(req, res) {
    const id = req.params.id;
    // usuwanie notatki
    res.send('Notatka usunięta. ID ' + id);
  }
}

module.exports = new noteActions();
