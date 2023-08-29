import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'Fist web with node' }));

router.get('/consultoria', (req, res) => res.render('about', { title: 'Consultoria' }));

router.get('/formacion-especializada', (req, res) => res.render('contacto', { title: 'Formación Especializadas' }));

router.get('/nosotros', (req, res) => res.render('contacto', { title: 'Nosotros' }));

router.get('/contacto', (req, res) => res.render('contacto', { title: 'Contacto' }));

export default router;
