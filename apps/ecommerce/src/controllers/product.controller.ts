import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import { ProductService } from '../services';
import { Product } from '../entities';
import { ProductCreateDto, ProductDto } from './dtos';

@Crud({
  model: {
    type: ProductDto
  },
  dto: {
    create: ProductCreateDto,
    update: ProductCreateDto,
  },
})
@Controller('products')
export class ProductController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
