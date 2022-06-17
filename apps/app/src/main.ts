import { bootstrap, NODE_HOST, NODE_PORT } from "./main.base";

bootstrap()
  .then((app) => {
    console.log(`Listing port http://${NODE_HOST}:${NODE_PORT}`);
    return app.listen(NODE_PORT, NODE_HOST);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
;
