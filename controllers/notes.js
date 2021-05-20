const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const router = require("../routes/auth");
const { addNote } = require("../routes/notes");
const client = require("../configs/db");
const routers = express.Router();

exports.addNote = (req, res) => {
  const { heading, content } = req.body;
  client
    .query(
      `INSERT INTO notes (email, heading, content) VALUES ('${req.email}', '${heading}' , '${content}');`
    )
    .then((data) => {
      res.status(200).json({
        message: "Note added successfully",
      });
    })
    .catch((err) => {
      console.log(erro);
      res.status(400).json({
        message: "database error occured",
      });
    });
};

exports.getAllNotes = (req, res) => {
  client
    .query(`SELECT * FROM notes WHERE email = '${req.email}'`)
    .then((data) => {
      const noteData = data.rows;
      const filteredData = noteData.map((note) => {
        return {
          noteId: note.noteid,
          heading: note.heading,
          content: note.content,
        };
      });
      console.log(filteredData);
      res.status(200).json({
        message: "Recieved successfully",
        data: filteredData,
      });
    })
    .catch((err) => {
      console.log(erro);
      res.status(400).json({
        message: "database error occured",
      });
    });
};

exports.updateNoteId = (req, res) => {
  const noteId = req.params.noteId;
  const { heading, content } = req.body;
  client
    .query(
      `UPDATE notes SET heading='${heading}', content='${content}' WHERE noteId='${noteId}'`
    )
    .then((data) => {
      res.status(200).json({
        message: "Note updated successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "database error occured",
      });
    });
};

exports.deleteNoteId = (req, res) => {
  const noteId = req.params.noteId;
  client
    .query(`DELETE FROM notes WHERE noteId ='${noteId}'`)
    .then((data) => {
      res.status(200).json({
        message: "Note deleted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        "message": "database error occured",
      });
    });
};
