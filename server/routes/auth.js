import express from 'express';
import { loginCallback } from '../controllers/auth/auth.js';
import passport from 'passport';

const routes = express.Router();

routes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
routes.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    loginCallback
);

routes.get('/logout', (req, res, next) => {
   console.log("zc")
   req.logout((err) => {
       if (err) {
           return next(err);
        }
        
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.clearCookie('connect.sid');  // Clear the session cookie
            console.log("zc")
            res.redirect('/');
        });
    });
});

export default routes;
