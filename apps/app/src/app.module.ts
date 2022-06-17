import { Module } from "@nestjs/common";
import { CartModule } from "../../cart/src/cart.module";
import { LoggerModule } from "nestjs-pino";
import { Environment, EnvironmentModule } from "@app/environment";
import { Params } from "nestjs-pino/params";
import { RouterModule } from "@nestjs/core";

@Module({
  imports: [
    // Commons
    EnvironmentModule,
    LoggerModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [Environment],
      useFactory: ((environment: Environment): Params => ({
        pinoHttp: {
          level: environment.LOG_LEVEL,
          autoLogging: {
            ignore: (req) => ["/health", "/favicon.ico"].includes(req.url),
          },
          serializers: {
            req(req) {
              req.body = req.raw.body;
              return req;
            },
          },
        },
      })),
    }),

    // Modules
    CartModule,
    RouterModule.register([
      {
        path: '/',
        module: CartModule
      },
    ]),
  ],
})
export class AppModule {}
