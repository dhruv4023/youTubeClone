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
    // console.log("Not");
    res.status(404).json({ message: "Plz Upload a '.mp4' Video File Only" });
  } else {
    try {
      // console.log(req.file);
      const file = new SingleFile({
        videoTitle: req.body.title,
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size, // 0.00
        videoChanel: req.body.chanel,
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
/*
 app.get('/init-video', function (req, res) {
  mongodb.MongoClient.connect(url, function (error, client) {
    if (error) {
      res.json(error);
      return;
    }
    // connect to the videos database
    const db = client.db('videos');

    // Create GridFS bucket to upload a large file
    const bucket = new mongodb.GridFSBucket(db);

    // create upload stream using GridFS bucket
    const videoUploadStream = bucket.openUploadStream('bigbuck');

    // You can put your file instead of bigbuck.mp4
    const videoReadStream = fs.createReadStream('./bigbuck.mp4');

    // Finally Upload!
    videoReadStream.pipe(videoUploadStream);

    // All done!
    res.status(200).send("Done...");
  });
});
 */
