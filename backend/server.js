const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});
