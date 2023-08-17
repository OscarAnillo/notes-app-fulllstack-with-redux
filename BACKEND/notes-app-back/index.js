const express = require('express');
const app = express();
const cors = require('cors');

const notesRouter = require("./Router/routes");

const PORT = 3005;

app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));