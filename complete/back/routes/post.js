const express = require("express");
const { Post } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  await Post.create({
    title: req.body.title,
    writer: req.body.writer,
    content: req.body.content,
  });
  res.status(201).send("ok");
});

router.get("/", async (req, res, next) => {
  const posts = await Post.findAll();
  res.status(201).send(posts);
});

module.exports = router;
