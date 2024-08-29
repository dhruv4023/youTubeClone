import jwt from "jsonwebtoken";
import users from "../models/auth.js";
// import passport from "passport";

export const loginCallback = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.user;

    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      // console.log(2);
      try {
        const newUser = await users.create({ email, name: firstName + " " + lastName });
        // console.log(2);
        const token = jwt.sign(
          { email: newUser.email, id: newUser._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        // console.log(3);
        res.status(200).json({ result: newUser, token });
        // console.log(4);
      } catch (err) {
        res.status(500).json({ mess: "something wents wrong . . ." });
      }
    } else {
      const token = jwt.sign(
        { email: existinguser.email, id: existinguser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.redirect(process.env.REDIRECT_URL);
    }
  } catch (err) {
    res.status(500).json("something wents wrong . . .");
  }
};

