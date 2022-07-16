import Express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
// import fileupload from 'express-fileupload'
//
import path from 'path'
import bodyParser from 'body-parser'
//
import userRoutes from './routes/users.js'
import videoRoutes from './routes/Video.js'
import commentRoutes from './routes/Comment.js'

const app = Express();
dotenv.config();
app.use(Express.json({ limit: "30mb", extended: true }))
app.use(Express.urlencoded({ limit: "30mb", extended: true }))
app.use(Express.static('public'))
app.use(cors());
// app.use(fileupload());


app.get('/', (req, res) => {
    res.send("hello");
})

app.use(bodyParser.json());
app.use('/uploads', Express.static(path.join('uploads')));

app.use('/user',userRoutes)
app.use('/video',videoRoutes)
app.use('/comments',commentRoutes)

// app.use('/answer',answerRoutes)
// app.use('/vote',voteRoutes)


const PORT = process.env.PORT || 5500

const DB_URL= process.env.CONNECTION_URL



mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen((PORT), () => { console.log(`server Running on the http://localhost:${PORT}`) }))
.catch((err) => { console.log(err.message) })


// app.post('/init-video',  (req, res)=> {
//     console.log(req.file)
//     // const data=req.body;
//     // console.log(data.src)
//     // mongodb.MongoClient.connect("mongodb://localhost:27017", function (error, client) {
//     // if (error) {
//     //   res.json(error);
//     //   return;
//     // }
//     // // connect to the videos database
//     // const db = client.db('videos');

//     // // Create GridFS bucket to upload a large file
//     // const bucket = new mongodb.GridFSBucket(db);

//     // // create upload stream using GridFS bucket
//     // const videoUploadStream = bucket.openUploadStream('bigbuck');

//     // // You can put your file instead of bigbuck.mp4
//     // const videoReadStream = fs.createReadStream(data.src);

//     // // Finally Upload!
//     // videoReadStream.pipe(videoUploadStream);

//     // // All done!
//     // res.status(200).send("Done...");
//   // });
// });


/* git push heroku master */