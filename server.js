const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const { v4: uuidv4 } = require('uuid');
const { getNotes, saveNote, getAndRenderNotes } = require('./public/assets/js/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    getNotes().then((data) => res.json(JSON.parse(data)))
});

app.post('/api/notes', (req, res) => {
    const { title, text } = req.body
    if(req.body) {
    const newNote = {
        title,
        text,
        id: uuidv4(),
    };
    saveNote(newNote);
    getAndRenderNotes();
    res.json('Note added successfully')
}else {
    res.error('Error in adding note')
}
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
const notes = require('express').Router();

