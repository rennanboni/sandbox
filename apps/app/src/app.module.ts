import { Environment, EnvironmentModule } from "@app/environment";
import { RouterModule } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { LoggerModule } from "nestjs-pino";
import { Params } from "nestjs-pino/params";

import { EcommerceModule } from "../../ecommerce/src/ecommerce.module";

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
    EcommerceModule,
    RouterModule.register([
      {
        path: '/',
        module: EcommerceModule
      },
    ]),
  ],
})
export class AppModule {}
