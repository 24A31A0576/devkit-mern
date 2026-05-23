import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import Component from '../models/Component.js';

// GET /api/favorites
export const getFavorites = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate('favorites');
  res.json(user.favorites);
});

// POST /api/favorites/:componentId
export const addFavorite = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const componentId = req.params.componentId;
  const component = await Component.findById(componentId);
  if (!component) {
    res.status(404);
    throw new Error('Component not found');
  }
  if (user.favorites.includes(componentId)) {
    res.status(400);
    throw new Error('Component already in favorites');
  }
  user.favorites.push(componentId);
  await user.save();
  res.json({ message: 'Added to favorites', favoriteId: componentId });
});

// DELETE /api/favorites/:componentId
export const removeFavorite = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  user.favorites = user.favorites.filter(id => id.toString() !== req.params.componentId);
  await user.save();
  res.json({ message: 'Removed from favorites' });
});
