import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ECOMMERCE_CONNECTION } from '../ecommerce.contants';
import { Product } from '../entities';

@Injectable()
export class ProductService extends TypeOrmCrudService<Product> {

  constructor(
    @InjectRepository(Product, ECOMMERCE_CONNECTION) repository: Repository<Product>
  ) {
    super(repository);
  }

}
