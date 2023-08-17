const router = require('express').Router();
let data = require("../Data/data.json");
const { v4: uuidv4 } = require('uuid');

router.get("/", (req, res) => {
    res.json(data)
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const findNoteById = data.notes.find((note) => note.id === id);

    if(findNoteById){
        res.json(findNoteById)
    } else {
        res.status(404).send("Note not found!")
    }
})

router.post("/", (req, res) => {
    const body = req.body;
    
    const newNote = {
        id: uuidv4(),
        note: body.note,
    }

    data.notes = data.notes.concat(newNote);
    res.json(newNote);
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    data.notes = data.notes.filter((note) => note.id !== id);

    res.status(204).end();
})

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const findNoteById = data.notes.find((note) => note.id === id);

    if(findNoteById){
        findNoteById.note = body.note;
        res.json(findNoteById)
    } else {
        res.status(404).send("Note not found")
    }

})


module.exports = router;