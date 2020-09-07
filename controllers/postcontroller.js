const express = require("express");
const router = express.Router();
const { Router } = require("express");

const validateSession = require("../middleware/validate-session");
const Post = require("../db").import("../models/post");

// CREATE A POST
router.post("/create", (req, res) => {
  const createPost = {
    content: req.body.post.content,
    threadId: req.body.post.threadId,
    isFlagged: false,
    createdBy: req.user.id,
  };
  Post.create(createPost)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

// GET ALL POSTS FOR A THREAD
router.get("/:threadId", (req, res) => {
  Post.findAll({
    where: { threadId: req.params.threadId },
  })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(500).json({ error: err }));
});

// UPDATE THREAD BY ID
router.put("/update/:entryId", (req, res) => {
  const updatePost = {
    content: req.body.post.content,
    threadId: req.body.post.threadId,
    isFlagged: false,
    createdBy: req.user.id,
  };

  const query = { where: { id: req.params.entryId, createdBy: req.user.id } };

  Post.update(updatePost, query)
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(500).json({ error: err }));
});

// DELETE A THREAD
router.delete("/delete/:id", (req, res) => {
  const query = { where: { id: req.params.id, createdBy: req.user.id } };

  Post.destroy(query)
    .then(() => res.status(200).json({ message: "Post Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
