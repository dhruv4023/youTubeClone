import express from "express";
import { uploadVideos, getVideos } from "../controllers/video.js";
import upload from "../helpers/filehelpers.js";
const routes = express.Router();
import { historyController,getHistory } from "../controllers/history.js";
import { watchLaterController,getwatchLater,deletewatchLater } from "../controllers/watchLater.js";

import { likedVideoController,getlikedVideo,deletelikedVideo } from "../controllers/likedVideo.js";
import { likeController } from "../controllers/like.js";
import { ViewController } from "../controllers/views.js";
import auth from "../middlewares/auth.js";
// routes.post("/video", upload.single("file"), async (req, res, next)=> {
// })

routes.post("/uploadvideo", auth, upload.single("file"), uploadVideos);
routes.get("/getvideo", getVideos);

routes.post("/history", auth, historyController);
routes.get("/getHistory", getHistory);

routes.post("/watchLater", auth, watchLaterController);
routes.get("/getwatchLater", getwatchLater);
routes.delete("/deletewatchLater/:videoId/:Viewer",auth, deletewatchLater);

routes.post("/likedVideo", auth, likedVideoController);
routes.get("/getlikedVideo", getlikedVideo);
routes.delete("/deletelikedVideo/:videoId/:Viewer",auth, deletelikedVideo);

routes.patch("/like/:id",auth,likeController)
routes.patch("/view/:id",ViewController)

export default routes;