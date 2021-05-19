const express = require("express");
const { addNote, getAllNotes, updateNoteId, deleteNoteId } = require("../controllers/notes");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/add", verifyToken, addNote);
router.get("/getallnotes", verifyToken, getAllNotes);
router.put("/update/:noteId", verifyToken, updateNoteId);
router.delete("/delete/:noteId", verifyToken, deleteNoteId);
module.exports = router;
