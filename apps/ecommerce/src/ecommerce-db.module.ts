import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import datasource from './ecommerce-db.datasource';
import { ECOMMERCE_CONNECTION } from './ecommerce.contants';
import { Cart, CartItem, Product } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...datasource.options,
      autoLoadEntities: true
    }),

    TypeOrmModule.forFeature([Cart], ECOMMERCE_CONNECTION),
    TypeOrmModule.forFeature([CartItem], ECOMMERCE_CONNECTION),
    TypeOrmModule.forFeature([Product], ECOMMERCE_CONNECTION),
  ],
  exports: [
    TypeOrmModule
  ]
})
export class EcommerceDBModule {}