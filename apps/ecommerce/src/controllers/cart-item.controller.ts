import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import { CartItemService } from '../services';
import { CartItem } from '../entities';

@Crud({
  model: {
    type: CartItem
  },
})
@Controller('cart-items')
export class CartItemController implements CrudController<CartItem> {
  constructor(public service: CartItemService) {}
}
