import SingleFile from "../models/singlefile.js";

export const getVideos = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
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
      //----------------------------------------google cloud-----------------------------------------------------
      // if (req.file) {
      //   console.log("File found, trying to upload...");
      //   const blob = bucket.file(req.file.originalname);
      //   const blobStream = blob.createWriteStream();

      //   blobStream.on("finish", () => {
      //     res.status(200).send("Success");
      //     console.log("Success");
      //   });
      //   blobStream.end(req.file.buffer);
      // } else throw "error with img";
      //----------------------------------------google cloud-----------------------------------------------------
      // console.log(req.file);
      const file = new SingleFile({
        videoTitle: req.body.title,
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size, // 0.00
        videoChanel: req.body.chanel,
        Uploder: req.body.Uploder,
        //   fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
      });
      // console.log("done")

      await file.save();
      res.status(201).send("File Uploaded Successfully");
    } catch (error) {
      //   console.log("err")
      res.status(400).send(error.message);
    }
  }
};
// (req, res) => {
//   console.log("Made it /upload");
//   try {

//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
