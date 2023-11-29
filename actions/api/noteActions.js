const Note = require('../../db/models/note');

class noteActions {
  async saveNote(req, res) {
    const title = req.body.title;
    const body = req.body.body;

    let note;

    try {
      note = new Note({ title, body });
      await note.save();
    } catch (err) {
      return res.status(200).json({ message: err.message });
    }

    res.status(201).json(note);
  }

  // pobieranie notatek
  async getAllNotes(req, res) {
    const doc = await Note.find({});
    res.status(200).json(doc);
  }

  // pobieranie notatek v2
  // async getAllNotes(req, res) {
  //   let doc;

  //   try {
  //     doc = await Note.find({});
  //   } catch (err) {
  //     return res.status(500).json({ message: err.message });
  //   }

  //   res.status(200).json(doc);
  // }

  // pobieranie notatek v3
  // getAllNotes(req, res) {
  //   Note.find({})
  //     .then((docs) => {
  //       console.log(docs);
  //       res.status(200).json(docs);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500).send('Błąd serwera');
  //     });
  // }

  // pobieranie konkretnej notatki
  async getNote(req, res) {
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });
    res.status(200).send(note);
  }

  // aktualizowanie notatki
  async updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.body = body;
    await note.save();

    res.status(201).json(note);
  }

  // usuwanie notatki
  async deleteNote(req, res) {
    const id = req.params.id;
    await Note.deleteOne({ _id: id });

    res.sendStatus(204);
  }
}

module.exports = new noteActions();
