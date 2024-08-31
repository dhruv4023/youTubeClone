import express from "express";
import { uploadVideos, getAllVideos, getVideosByID } from "../controllers/video.js";
const routes = express.Router();
import {
  historyController,
  getHistory,
  clearhistory,
} from "../controllers/history.js";
import {
  watchLaterController,
  getwatchLater,
  deletewatchLater,
} from "../controllers/watchLater.js";

import {
  likedVideoController,
  getlikedVideo,
  deletelikedVideo,
} from "../controllers/likedVideo.js";
import { ViewController } from "../controllers/views.js";
import auth from "../middlewares/auth.js";

// Streams file upload to server/uploads directory
import upload from "../helpers/filehelpers.js";
routes.post("/uploadvideo", auth, upload.single("file"), uploadVideos);


routes.get("/get/:id", getVideosByID);
routes.get("/getall", getAllVideos);

routes.post("/history", auth, historyController);
routes.get("/get/history/:userId", getHistory);
routes.delete("/clearhistory/:userId", auth, clearhistory);

routes.post("/watchLater", auth, watchLaterController);
routes.get("/get/watchLater/:userId/:vid", getwatchLater);
routes.delete("/deletewatchLater/:videoId/:Viewer", auth, deletewatchLater);

routes.post("/likedVideo", auth, likedVideoController);
routes.get("/get/likedVideo/:userId/:vid", getlikedVideo);
routes.delete("/deletelikedVideo/:videoId/:Viewer", auth, deletelikedVideo);

routes.patch("/view/:id", ViewController);

export default routes;
