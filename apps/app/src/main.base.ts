import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from "@nestjs/platform-express";
import { INestApplication } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { CartModule } from "../../cart/src/cart.module";

export const NODE_PORT = +process.env.NODE_PORT || +process.env.PORT || 3000;
export const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';

export const bootstrap = async (server?: any) => {
  const module = getModule();
  const app = await NestFactory.create<INestApplication>(module, new ExpressAdapter(server), { cors: true });
  // Configs
  app.useLogger(app.get(Logger));

  // Swagger
  if (!isProduction() || isSwaggerEnabled()) {
    const config = new DocumentBuilder()
      .setTitle('Sandbox-API')
      .addBearerAuth()
    ;

    // Swagger Servers
    getSwaggerServers()
      .forEach((url) => config.addServer(url))
    ;

    try {
      const pkg = await import('../../../package.json');
      if (pkg) {
        config.setVersion(pkg.version);
      }
    } catch (err) {}

    const document = SwaggerModule.createDocument(app, config.build());
    SwaggerModule.setup('/', app, document);
  }

  return app;
}

const isProduction = (): boolean => process.env.NODE_ENV === 'production';
const isSwaggerEnabled = (): boolean => /true/i.test(process.env.SWAGGER_ENABLED);
const getSwaggerServers = (): string[] => process.env.SWAGGER_SERVERS ? process.env.SWAGGER_SERVERS.split(',') : [];

const getModule = async() => {
  const module = process.env.NESTJS_MODULE || 'AppModule';
  const modules = [
    AppModule,
    CartModule
  ];

  return modules
    .find(item => item.name === module)
  ;
}
