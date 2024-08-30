import SingleFile from "../models/singlefile.js";
import User from "../models/Auth.js";

export const getVideosByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const files = await SingleFile.findOne({ _id: id }).populate({
      path: "videoChanel",
      select: "name",
      model: User,
    })
      .exec();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export const getAllVideos = async (req, res) => {
  try {
    const files = await SingleFile.find({})
      .populate({
        path: "videoChanel",
        select: "name",
        model: User,
      })
      .exec();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const uploadVideos = async (req, res, next) => {
  // console.log(req.body);
  if (req.file === undefined) {
    res.status(404).json({ message: "Plz Upload a '.mp4' Video File Only" });
  } else {
    try {
      const file = new SingleFile({
        videoTitle: req.body.title,
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size, // 0.00
        videoChanel: req.body.chanel,
        Uploder: req.body.Uploder,
      });

      await file.save();
      res.status(201).send("File Uploaded Successfully");
    } catch (error) {
      //   console.log("err")
      res.status(400).send(error.message);
    }
  }
};