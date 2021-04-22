import express from 'express';
import home from './controller/homeController.js'

const router = express.Router();

router.get('/', home.index);

export default router;
