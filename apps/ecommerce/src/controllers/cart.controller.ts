import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import { CartService } from '../services';
import { CartDto } from './dtos';
import { Cart } from '../entities';

@Crud({
  model: {
    type: Cart
  },
  serialize: {
    get: CartDto
  }
  // validation: {
  //   transform: true,
  //   transformOptions: {
  //     strategy: 'excludeAll',
  //     excludeExtraneousValues: true
  //   }
  // }
})
@Controller('carts')
export class CartController implements CrudController<Cart> {
  constructor(public service: CartService) {}
}
