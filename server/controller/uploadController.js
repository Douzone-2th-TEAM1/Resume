import {} from 'express-async-errors';
import { config } from '../config.js';
import { uploadFile, getFileStream } from '../aws/s3.js';
import fs from 'fs';
import util from 'util';
import multer from 'multer';

export const uploadFileToServer = multer({ dest: 'uploads/' });
const unlinkFile = util.promisify(fs.unlink);

export async function uploadFileToS3(req, res, next) {
  const file = req.file;
  console.log(file);
  const uploadInfo = await uploadFile(file);
  await unlinkFile(file.path);
  res.json({ url: uploadInfo.Key });
}

export async function getFileFromS3(req, res) {
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
}
