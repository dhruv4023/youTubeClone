import jwt from 'jsonwebtoken';
import users from '../../models/Auth.model.js';
import session from 'express-session';

export const loginCallback = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.user;

    // Check if the user already exists
    let user = await users.findOne({ email });
    if (!user) {
      // Create a new user if they do not exist
      user = await users.create({ email, name: `${firstName} ${lastName}` });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET
    );
    
    req.session.user = {
      email: user.email,
      id: user._id,
      name: user.name,
      token
    };
    // Send response with JWT token
    res.redirect(process.env.REDIRECT_URL)

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
