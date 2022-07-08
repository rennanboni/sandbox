import * as express from 'express';
import { bootstrap } from '@app/common/bootstrap';

import { EcommerceModule } from './ecommerce.module';

const server = express();
bootstrap(EcommerceModule, server)
  .then(app => app.init())
  .catch(err => console.error('Nest broken', err));

export const api = server;
