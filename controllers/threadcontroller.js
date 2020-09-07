const express = require("express");
const router = express.Router();
const { Router } = require("express");

const validateSession = require("../middleware/validate-session");
const Thread = require("../db").import("../models/thread");

// CREATE A THREAD
router.post("/create", (req, res) => {
  const createThread = {
    headline: req.body.thread.headline,
    originalPost: req.body.thread.originalPost,
    bookId: req.body.thread.bookId,
    isFlagged: false,
    createdBy: req.user.id,
  };
  Thread.create(createThread)
    .then((thread) => res.status(200).json(thread))
    .catch((err) => res.status(500).json({ error: err }));
});

// GET ALL THREADS FOR A BOOK
router.get("/:id", (req, res) => {
  Thread.findAll({
    where: { bookId: req.params.id },
  })
    .then((threads) => res.status(200).json(threads))
    .catch((err) => res.status(500).json({ error: err }));
});

// GET THREAD BY HEADLINE
router.get("/:headline", (req, res) => {
  Thread.findAll({
    where: { headline: headline },
  })
    .then((threads) => res.status(200).json(threads))
    .catch((err) => res.status(500).json({ error: err }));
});

// UPDATE THREAD BY ID
router.put("/update/:entryId", (req, res) => {
  const updateThread = {
    headline: req.body.thread.headline,
    originalPost: req.body.thread.originalPost,
    bookId: req.body.thread.bookId,
    isFlagged: false,
    createdBy: req.user.id,
  };

  const query = { where: { id: req.params.entryId, createdBy: req.user.id } };

  Thread.update(updateThread, query)
    .then((threads) => res.status(200).json(threads))
    .catch((err) => res.status(500).json({ error: err }));
});

// DELETE A THREAD
router.delete("/delete/:id", (req, res) => {
  const query = { where: { id: req.params.id, createdBy: req.user.id } };

  Thread.destroy(query)
    .then(() => res.status(200).json({ message: "Thread Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
