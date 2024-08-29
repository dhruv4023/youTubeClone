import express from 'express';
import { loginCallback } from '../controllers/auth.js';
import passport from 'passport';

const routes = express.Router();

routes.get('/google',   passport.authenticate('google', { scope: ['profile', 'email'] }));
routes.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    loginCallback
);
export default routes;
