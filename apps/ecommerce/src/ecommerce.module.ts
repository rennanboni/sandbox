import { Environment, EnvironmentModule } from '@app/environment';
import { LoggerModule } from 'nestjs-pino';
import { Params } from 'nestjs-pino/params';
import { Module } from '@nestjs/common';

import { EcommerceDBModule } from './ecommerce-db.module';
import { CartController, CartItemController, ProductController } from './controllers';
import { CartItemService, CartService, ProductService } from './services';

@Module({
  controllers: [
    CartController,
    CartItemController,
    ProductController,
  ],
  providers: [
    CartService,
    CartItemService,
    ProductService,
  ],
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

    EcommerceDBModule,
  ],
})
export class EcommerceModule {}
