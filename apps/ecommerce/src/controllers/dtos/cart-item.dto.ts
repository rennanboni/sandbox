import { CartCreateDto } from './cart-create.dto';
import { ProductDto } from './product.dto';

export class CartItemDto extends CartCreateDto {
  id: string;
  product: ProductDto;
  quantity: number;
}
