import express from 'express';
import { loginCallback } from '../controllers/auth.js';
import passport from 'passport';

const routes = express.Router();

routes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
routes.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    loginCallback
);

// Logout route
routes.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});
export default routes;
