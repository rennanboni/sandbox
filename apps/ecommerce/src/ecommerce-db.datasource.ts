import { DataSource } from 'typeorm';

import { ECOMMERCE_CONNECTION, ECOMMERCE_SCHEMA } from './ecommerce.contants';
import { join } from 'path';

export default new DataSource({
  type: 'postgres',
  name: ECOMMERCE_CONNECTION,
  schema: ECOMMERCE_SCHEMA,
  url: process.env.DATABASE_URL,
  logging: /true/i.test(process.env.DATABASE_LOGGING),
  migrationsRun: /true/i.test(process.env.DATABASE_MIGRATIONS_RUN),
  migrations: [
    join(__dirname, 'migrations/*.{ts,js}'),
  ],
})
