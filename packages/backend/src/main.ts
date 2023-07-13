/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import axios from 'axios';
import cors from 'cors';

const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer gUSfU8yFUS1PEOzIoqHB-NQ0s6Hr4ka9G5XKLDT7DhtEmela7V_g5SCRHQBfvFrs9-Zmj7vqq1778S3pos6PIOFjN8P36ciVmuDQaSP7sdifMSU-ZC9kZj1Cfe-sZHYx',
  },
});

const app = express();
app.use(cors());

app.get('/search', async (req, res) => {
  const { lat, lng } = req.query;
  console.log(lat, lng);

  let data = '';
  try {
    const yelpResponse = await yelp.get('/search', {
      params: {
        limit: 50,
        term: 'hiking',
        latitude: lat,
        longitude: lng,
      },
    });
    data = yelpResponse.data;
  } catch (error) {
    res.status(400).send('Error!').end();
    return;
  }

  res.send(data);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
