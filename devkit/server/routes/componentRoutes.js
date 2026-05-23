import express from 'express';
import {
  getComponents,
  getComponentById,
  getComponentBySlug,
  getPopularComponents,
} from '../controllers/componentController.js';

const router = express.Router();

router.get('/', getComponents);
router.get('/popular', getPopularComponents);
router.get('/slug/:slug', getComponentBySlug);
router.get('/:id', getComponentById);

export default router;
