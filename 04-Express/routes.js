import express from 'express';
import home from './controller/homeController.js';
import heroe from './controller/heroeController.js';
import authentication from './controller/authenticationController.js';
import isAuthenticated from './middleware/isAuthenticated.js';

const router = express.Router();

router.get('/', home.index);
router.get('/home', home.index);
router.get('/about/:name', home.about);
router.get('/api/heroes', heroe.index);
router.get('/api/heroes/:id', heroe.detail);
router.delete('/api/heroes/:id', isAuthenticated, heroe.delete);
router.post('/api/heroes', isAuthenticated, heroe.add);
router.patch('/api/heroes/:id', isAuthenticated, heroe.update);
router.put('/api/heroes/:id', isAuthenticated, heroe.update);

router.get('/api/login', authentication.login);

export default router;
