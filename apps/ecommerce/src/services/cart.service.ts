import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ECOMMERCE_CONNECTION } from '../ecommerce.contants';
import { Cart } from '../entities';

@Injectable()
export class CartService extends TypeOrmCrudService<Cart> {

  constructor(
    @InjectRepository(Cart, ECOMMERCE_CONNECTION) repository: Repository<Cart>
  ) {
    super(repository);
  }

}
