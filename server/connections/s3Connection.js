import AWS from 'aws-sdk';
import { config } from '../config.js';
const { accessKeyId, secretAccessKey, region } = config.aws;

export const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  region,
});
