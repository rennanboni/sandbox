import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItem } from './cart-item.entity';

@Index('UQ_a49c375f99e0d021a0100eba680', ['name'], { unique: true })
@Entity('Products', { schema: 'ecommerce' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'Id' })
  id: number;

  @Column('character varying', { name: 'Name', unique: true, length: 150 })
  name: string;

  @Column('integer', { name: 'Price' })
  price: number;

  @Column('timestamp without time zone', {
    name: 'CreatedAt',
    nullable: true,
    default: () => 'now()',
  })
  createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'UpdatedAt', nullable: true })
  updatedAt: Date | null;

  @Column('timestamp without time zone', { name: 'DeletedAt', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => CartItem, (cartItem) => cartItem.product)
  cartItems: CartItem[];
}
