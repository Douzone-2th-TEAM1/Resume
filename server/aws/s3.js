import fs from 'fs';
import { config } from '../config.js';
import { s3 } from '../connections/s3Connection.js';

const { bucket } = config.aws;

// uploads a file to s3
export function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);
  return s3
    .upload({
      Bucket: bucket,
      Body: fileStream,
      Key: file.filename,
    })
    .promise();
}

// downloads a file from s3
export function getFileStream(key) {
  return s3
    .getObject({
      Key: key,
      Bucket: bucket,
    })
    .createReadStream();
}
