import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Create post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });
  await post.save();
  res.status(201).json(post);
});

// Delete post
router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

// Update post
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  const updated = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  res.json(updated);
});

export default router;
