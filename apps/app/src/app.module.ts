import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { EcommerceModule } from '../../ecommerce/src/ecommerce.module';
import { PetModule } from '../../pet/src/pet.module';

@Module({
  imports: [
    // Modules
    EcommerceModule,
    PetModule,
    RouterModule.register([
      {
        path: '/ecommerce',
        module: EcommerceModule
      },
      {
        path: '/pet',
        module: PetModule
      },
    ]),
  ],
})
export class AppModule {}
