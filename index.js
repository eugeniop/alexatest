'use latest';

import bodyParser from 'body-parser';
import express from 'express';
import Webtask from 'webtask-tools';

const server = express();
server.use(bodyParser.json());

server.post('/',(req, res) => {
  console.log('P');
  res.send((new Date()).toString());
});

server.get('/',(req, res) => {
  console.log('GET');
  res.send((new Date()).toString());
});

module.exports = Webtask.fromExpress(server);
