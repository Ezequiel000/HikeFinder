import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer gUSfU8yFUS1PEOzIoqHB-NQ0s6Hr4ka9G5XKLDT7DhtEmela7V_g5SCRHQBfvFrs9-Zmj7vqq1778S3pos6PIOFjN8P36ciVmuDQaSP7sdifMSU-ZC9kZj1Cfe-sZHYx',
  },
});
