import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItem } from './cart-item.entity';

@Entity('Carts', { schema: 'ecommerce' })
export class Cart {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'Id' })
  id: number;

  @Column('timestamp without time zone', { name: 'CreatedAt', nullable: true, default: () => 'now()', })
  createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'UpdatedAt', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ type: 'timestamp without time zone', name: 'DeletedAt', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  cartItems: CartItem[];
}
