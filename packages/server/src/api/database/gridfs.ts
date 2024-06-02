import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';

const conn = mongoose.createConnection('mongodb://localhost:27017', {
  dbName: 'tombtrader',
});

let gfsBucket: GridFSBucket;
conn.once('open', () => {
  gfsBucket = new GridFSBucket(conn.db, {
    bucketName: 'crypto',
  });
});
