const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions');

router.get('/notes', noteActions.getAllNotes);
router.get('/notes/:id', noteActions.getNote);
router.get('/notes', noteActions.saveNote);
router.get('/notes', noteActions.updateNote);
router.get('/notes', noteActions.deleteNote);

module.exports = router;
