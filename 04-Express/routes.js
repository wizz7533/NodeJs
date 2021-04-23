import express from 'express';
import home from './controller/homeController.js';
import heroe from './controller/heroeController.js';

const router = express.Router();

router.get('/', home.index);
router.get('/home', home.index);
router.get('/about/:name', home.about);
router.get('/api/heroes', heroe.index);
router.get('/api/heroes/:id', heroe.detail);
router.delete('/api/heroes/:id', heroe.delete);
router.post('/api/heroes', heroe.add);
router.patch('/api/heroes/:id', heroe.update);
router.put('/api/heroes/:id', heroe.update);

export default router;
