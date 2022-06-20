import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from './product.entity';

@Entity('CartItems', { schema: 'ecommerce' })
export class CartItem {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'Id' })
  id: number;

  @Column('integer', { name: 'Quantity' })
  quantity: number;

  @Column('timestamp without time zone', { name: 'CreatedAt', nullable: true, default: () => 'now()' })
  createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'UpdatedAt', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ type: 'timestamp without time zone', name: 'DeletedAt', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Cart, (cart) => cart.cartItems)
  @JoinColumn([{ name: 'CartId', referencedColumnName: 'id' }])
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.cartItems)
  @JoinColumn([{ name: 'ProductId', referencedColumnName: 'id' }])
  product: Product;
}
