import { initializePassport } from './strategy/passport.js';
import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import session from 'express-session';
import passport from 'passport';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comment.js";
import MongoStore from "connect-mongo"

dotenv.config();
const app = Express();

initializePassport(passport);
app.use(Express.json({ limit: "30mb", extended: true }));
app.use(Express.urlencoded({ limit: "30mb", extended: true }));
app.use(Express.static("public"));
app.use(cors({
  origin: ["*"], // Replace with actual origins in production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_CONNECTION_URL,
      collectionName: 'sessions'
    }),
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Server running...");
});
app.use("/uploads", Express.static(path.join("uploads")));
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comments", commentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
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
    console.error("Database connection failed:", error.message);
  });

app.get('/api/session-data', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});
