import * as express from 'express';
import { bootstrap } from '@app/common/bootstrap';

import { PetModule } from './pet.module';

const server = express();
bootstrap(PetModule, server)
  .then(app => app.init())
  .catch(err => console.error('Nest broken', err));

export const api = server;
