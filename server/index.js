import { initializePassport } from './strategy/passport.js';
import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import fileupload from 'express-fileupload'
//
import path from "path";
import bodyParser from "body-parser";
import session from 'express-session';
import passport from 'passport';
//
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/Video.js";
import commentRoutes from "./routes/Comment.js";
// import * as url from "url";
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = Express();
dotenv.config();

initializePassport(passport);
app.use(Express.json({ limit: "30mb", extended: true }));
app.use(Express.urlencoded({ limit: "30mb", extended: true }));
app.use(Express.static("public"));
app.use(cors());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => {
  res.send("Server running...");
});
app.use(bodyParser.json());
app.use("/uploads", Express.static(path.join("uploads")));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comments", commentRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running on the http://localhost:${PORT}`);
});

mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((error) => {
    // console.log(error);
    console.log("db not connected");
  });
