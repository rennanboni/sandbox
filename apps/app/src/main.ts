import { bootstrap } from './main.base';

bootstrap()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
;
