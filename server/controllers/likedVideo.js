import likedVideo from "../models/likedVideo.js";
import mongoose from "mongoose"

export const likedVideoController = async (req, res) => {
  const likedVideoData = req.body;
  // console.log(likedVideoData);
  const addTolikedVideo = new likedVideo(likedVideoData);
  try {
    await addTolikedVideo.save();
    res.status(200).json("added to likedVideo");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't add to likedVideo");
  }
};

export const getlikedVideo = async (req, res, next) => {
  try {
    const files = await likedVideo.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletelikedVideo = async (req, res) => {
  const { id: _id } = req.params;
  // console.log(_id)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('Video unavailable in Your likedVideo...')
  }
  try {
      await likedVideo.findByIdAndRemove(_id);
      res.status(200).json({ message: "Removed From Your likedVideo Successfully  ..." })
  } catch (error) {
      res.status(400).json({ message: error.message })
  }
}