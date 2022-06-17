import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { Environment, EnvironmentModule } from "@app/environment";
import { LoggerModule } from "nestjs-pino";
import { Params } from "nestjs-pino/params";

@Module({
  controllers: [CartController],
  providers: [],
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
  ],
})
export class CartModule {}
