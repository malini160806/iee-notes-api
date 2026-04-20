const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createNote,
  getNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

// Protected routes
router.post("/", protect, createNote);
router.get("/", protect, getNotes);
router.get("/:id", protect, getSingleNote); // ✅ IMPORTANT
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);

module.exports = router;