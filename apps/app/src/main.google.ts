import * as express from 'express';
// import * as functions from 'firebase-functions';

import { bootstrap } from './main.base';

const server = express();
bootstrap(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

// export const api = functions.https.onRequest(server);
export const api = server;
