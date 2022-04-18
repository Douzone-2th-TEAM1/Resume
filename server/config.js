import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    expiresInSec: parseInt(required('JWT_EXPIRES_SEC')),
  },
  host: {
    port: parseInt(required('HOST_PORT')),
  },
  db: {
    host: required('DB_HOST'),
    port: required('DB_PORT'),
    user: required('DB_USER'),
    schema: required('DB_SCHEMA'),
    password: required('DB_PASSWORD'),
  },
};
