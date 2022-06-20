import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ECOMMERCE_CONNECTION } from '../ecommerce.contants';
import { CartItem } from '../entities';

@Injectable()
export class CartItemService extends TypeOrmCrudService<CartItem> {

  constructor(
    @InjectRepository(CartItem, ECOMMERCE_CONNECTION) repository: Repository<CartItem>
  ) {
    super(repository);
  }

}
