import { bootstrap, NODE_HOST, NODE_PORT } from '@app/common/bootstrap';
import { AppModule } from './app.module';

bootstrap(AppModule)
  .then((app) => {
    console.log(`Listing port http://${NODE_HOST}:${NODE_PORT}`);
    return app.listen(NODE_PORT, NODE_HOST);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
;
