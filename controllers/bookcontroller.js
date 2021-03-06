const express = require("express");
const router = express.Router();
const { Router } = require("express");

const validateSession = require("../middleware/validate-session");
const Book = require("../db").import("../models/book");

// CREATE A BOOK
router.post("/create", validateSession, (req, res) => {
  const createBook = {
    title: req.body.book.title,
    authorLast: req.body.book.authorLast,
    authorFirst: req.body.book.authorFirst,
    releaseYear: req.body.book.releaseYear,
    createdBy: req.body.book.createdBy,
  };
  Book.create(createBook)
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(500).json({ error: err }));
});

// GET ALL BOOKS
router.get("/", (req, res) => {
  Book.findAll()
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(500).json({ error: err }));
});

// GET ALL A USER'S CREATED BOOKS
router.get("/mine", validateSession, (req, res) => {
  Book.findAll({
    where: { createdBy: req.user.id },
  })
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(500).json({ error: err }));
});

// GET BOOK BY TITLE
router.get("/:title", validateSession, (req, res) => {
  Book.findAll({
    where: { title: title },
  })
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(500).json({ error: err }));
});

// UPDATE BOOK BY TITLE
router.put("/update/:entryId", validateSession, (req, res) => {
  const updateBook = {
    title: req.body.book.title,
    authorLast: req.body.book.authorLast,
    authorFirst: req.body.book.authorFirst,
    releaseYear: req.body.book.releaseYear,
  };

  const query = { where: { id: req.params.entryId } };

  Book.update(updateBook, query)
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(500).json({ error: err }));
});

// DELETE BOOK BY TITLE
router.delete("/delete/:id", validateSession, (req, res) => {
  const query = { where: { id: req.params.id } };

  Book.destroy(query)
    .then(() => res.status(200).json({ message: "Book Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
