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
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comment.js";
// import * as url from "url";
import MongoStore from "connect-mongo"
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = Express();
dotenv.config();

initializePassport(passport);
app.use(Express.json({ limit: "30mb", extended: true }));
app.use(Express.urlencoded({ limit: "30mb", extended: true }));
app.use(Express.static("public"));
app.use(cors({
  origin: ["*"],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_CONNECTION_URL, // Replace with your MongoDB URL
      collectionName: 'sessions'
    }),
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => {
  res.send("Server running... <a href='/auth/google'>login</a>");
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

// Endpoint to get session data
app.get('/api/session-data', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});