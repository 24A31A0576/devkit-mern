import asyncHandler from 'express-async-handler';
import Component from '../models/Component.js';

// GET /api/components
export const getComponents = asyncHandler(async (req, res) => {
  const { category, search, framework } = req.query;
  let query = {};
  if (category) query.category = category;
  if (search) query.$text = { $search: search };
  if (framework === 'html') query.htmlCode = { $ne: '' };
  if (framework === 'react') query.reactCode = { $ne: '' };

  const components = await Component.find(query).sort({ usageCount: -1, createdAt: -1 });
  res.json({ count: components.length, components });
});

// GET /api/components/:id
export const getComponentById = asyncHandler(async (req, res) => {
  const component = await Component.findById(req.params.id);
  if (!component) {
    res.status(404);
    throw new Error('Component not found');
  }
  // Increment usage count
  component.usageCount += 1;
  await component.save();
  res.json(component);
});

// GET /api/components/slug/:slug
export const getComponentBySlug = asyncHandler(async (req, res) => {
  const component = await Component.findOne({ slug: req.params.slug });
  if (!component) {
    res.status(404);
    throw new Error('Component not found');
  }
  res.json(component);
});

// GET /api/components/popular
export const getPopularComponents = asyncHandler(async (req, res) => {
  const components = await Component.find({ isPopular: true }).limit(8);
  res.json(components);
});
