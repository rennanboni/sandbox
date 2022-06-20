import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { DriverUtils } from 'typeorm/driver/DriverUtils';
import { TableForeignKey } from 'typeorm/schema-builder/table/TableForeignKey';

export class CreateTableCartItems1655762257412 implements MigrationInterface {

  public async up(qr: QueryRunner): Promise<void> {
    let numericType = 'int';
    if (DriverUtils.isSQLiteFamily(qr.connection.driver)) {
      numericType = 'integer';
    } else if (qr.connection.driver.options.type === 'spanner') {
      numericType = 'int64';
    }

    const table: Table = new Table({
      name: 'CartItems',
      columns: [
        {
          name: 'Id',
          type: numericType,
          isPrimary: true,
          isGenerated: qr.connection.driver.options.type !== 'spanner',
          generationStrategy: qr.connection.driver.options.type === 'spanner' ? undefined : 'increment',
        },
        {
          name: 'CartId',
          type: numericType,
          isNullable: false,
        },
        {
          name: 'ProductId',
          type: numericType,
          isNullable: false,
        },
        {
          name: 'Quantity',
          type: numericType,
          isNullable: false,
        },

        // Default Columns
        {
          name: 'CreatedAt',
          type: 'timestamp',
          isNullable: true,
          default: 'now()',
        },
        {
          name: 'UpdatedAt',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'DeletedAt',
          type: 'timestamp',
          isNullable: true,
        },
      ],

    });
    await qr.createTable(table);

    // Constraint CartId
    const cartForeignKey = new TableForeignKey({
      name: 'FK_CartItems__CartId',
      columnNames: ['CartId'],
      referencedTableName: 'ecommerce.Carts',
      referencedColumnNames: ['Id']
    });
    await qr.createForeignKey(table, cartForeignKey);

    // Constraint ProductId
    const productForeignKey = new TableForeignKey({
      name: 'FK_CartItems__ProductId',
      columnNames: ['ProductId'],
      referencedTableName: 'ecommerce.Products',
      referencedColumnNames: ['Id']
    });
    await qr.createForeignKey(table, productForeignKey);
  }

  public async down(qr: QueryRunner): Promise<void> {
    const table: Table = await qr.getTable('CartItems');
    await qr.dropTable(table);
  }
}
