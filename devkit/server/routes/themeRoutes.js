import express from 'express';
import { generateTheme, getThemeHistory } from '../controllers/themeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/generate', generateTheme);
router.get('/history', protect, getThemeHistory);

export default router;
