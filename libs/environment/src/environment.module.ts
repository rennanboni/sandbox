import { Environment } from "./environment.interface";
import { Global, Module } from "@nestjs/common";

import { DEFAULT_LOG_LEVEL } from "./environment.constants";

@Global()
@Module({
  providers: [
    {
      provide: Environment,
      useFactory: async (): Promise<Environment> => ({
        NODE_ENV: process.env.NODE_ENV,
        LOG_LEVEL: process.env.LOG_LEVEL || DEFAULT_LOG_LEVEL,

        DATABASE_URL: process.env.DATABASE_URL,
      }),
    },
  ],
  exports: [Environment],
})
export class EnvironmentModule {}
