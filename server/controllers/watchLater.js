import watchLater from "../models/watchLater.js";
import mongoose from "mongoose"

export const watchLaterController = async (req, res) => {
  const watchLaterData = req.body;
  // console.log(watchLaterData);
  const addTowatchLater = new watchLater(watchLaterData);
  try {
    await addTowatchLater.save();
    res.status(200).json("added to watchLater");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't add to watchLater");
  }
};

export const getwatchLater = async (req, res, next) => {
  try {
    const files = await watchLater.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletewatchLater = async (req, res) => {
  const { id: _id } = req.params;
  // console.log(_id)
  try {
      await watchLater.findByIdAndRemove(_id);
      res.status(200).json({ message: "Removed From Your WatchLater Successfully  ..." })
  } catch (error) {
      res.status(400).json({ message: error.message })
  }
}