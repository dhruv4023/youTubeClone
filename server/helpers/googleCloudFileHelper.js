"use strict";
// const multer = require('multer');
import Multer from "multer";

import { Storage } from "@google-cloud/storage";

let projectId = "YOUR-PROJECTID"; // Get this from Google Cloud
let keyFilename = "PATH-TO-YOUR-KEYFILE.json"; // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket("YOUR-STORAGE-BUCKET"); // Get this from Google Cloud -> Storage

const upload = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 1 * 1024 * 1024, // No larger than 1mb, change as you need
  },
});

export default upload;
