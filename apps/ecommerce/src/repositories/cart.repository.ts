import datasource from '../ecommerce-db.datasource';
import { Cart } from '../entities';

datasource.getMongoRepository(Cart).extend({

})
