import express from 'express';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favoriteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.get('/', getFavorites);
router.post('/:componentId', addFavorite);
router.delete('/:componentId', removeFavorite);

export default router;
