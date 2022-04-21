import { config } from '../config.js';
import AWS from 'aws-sdk';
import fs from 'fs';

const { accessKeyId, secretAccessKey, region, bucket } = config.aws;

export const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  region,
});

// uploads a file to s3
export function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    bucket,
    body: fileStream,
    key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

// downloads a file from s3
export function getFileStream(fileKey) {
  const downloadParams = {
    key: fileKey,
    bucket,
  };

  return s3.getObject(downloadParams).createReadStream();
}
