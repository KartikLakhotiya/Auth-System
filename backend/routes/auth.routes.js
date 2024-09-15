import express from 'express';
import { allusers, login, logout, signup, verifyEmail } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/all', allusers);
router.post('/signup', signup);
router.get('/login', login);
router.get('/logout', logout);
router.post('/verify-email', verifyEmail)


export default router;