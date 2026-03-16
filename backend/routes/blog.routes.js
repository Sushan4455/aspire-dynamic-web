const express = require("express");
const fs = require("fs-extra");
const path = require("path");
const { v4: uuid } = require("uuid");
const cloudinary = require("../services/cloudinary");

const router = express.Router();
const DB = path.join(__dirname, "../data/blogs.json");

// Helpers
const readDB = async () => fs.readJson(DB);
const writeDB = async (data) => fs.writeJson(DB, data, { spaces: 2 });

// GET all blogs (public)
router.get("/", async (_, res) => {
  const blogs = await readDB();
  res.json(blogs.filter(b => b.status === "published"));
});

// GET blog by slug
router.get("/:slug", async (req, res) => {
  const blogs = await readDB();
  const blog = blogs.find(b => b.slug === req.params.slug);
  res.json(blog || null);
});

// CREATE / UPDATE blog
router.post("/", async (req, res) => {
  const blogs = await readDB();
  const data = req.body;

  if (data.id) {
    const index = blogs.findIndex(b => b.id === data.id);
    blogs[index] = { ...blogs[index], ...data, updatedAt: Date.now() };
  } else {
    blogs.unshift({
      ...data,
      id: uuid(),
      createdAt: Date.now(),
    });
  }

  await writeDB(blogs);
  res.json({ success: true });
});

// DELETE blog
router.delete("/:id", async (req, res) => {
  let blogs = await readDB();
  blogs = blogs.filter(b => b.id !== req.params.id);
  await writeDB(blogs);
  res.json({ success: true });
});

// IMAGE upload
router.post("/upload", async (req, res) => {
  const result = await cloudinary.uploader.upload(req.body.image, {
    folder: "blogs",
  });
  res.json({ url: result.secure_url });
});

module.exports = router;
