import express from 'express';
import home from './controller/homeController.js';
import heroe from './controller/homeController.js';

const router = express.Router();

router.get('/', home.index);
router.get('/home', home.index);
router.get('/about/:name', home.about);
router.get('api/heroes', heroe.index);

export default router;
