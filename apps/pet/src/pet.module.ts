import { Module } from '@nestjs/common';

import { PetController } from './pet.controller';
import { PetService } from './pet.service';

@Module({
  controllers: [PetController],
  providers: [PetService],
  imports: [],
})
export class PetModule {}
