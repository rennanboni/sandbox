import { Controller, Get } from '@nestjs/common';
import { PetService } from './pet.service';

@Controller()
export class PetController {
  constructor(private readonly service: PetService) {}

  @Get()
  getHello(): any {
    return this.service.getHello();
  }
}
