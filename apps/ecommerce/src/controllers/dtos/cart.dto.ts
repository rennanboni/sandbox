import { CartCreateDto } from './cart-create.dto';
import { CartItemDto } from './cart-item.dto';

export class CartDto extends CartCreateDto {
  id: string;
  items: CartItemDto[];
}
