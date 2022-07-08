import { Injectable } from '@nestjs/common';

@Injectable()
export class PetService {
  getHello(): any {
    return {name: `Hello World! ${this.constructor.name}`};
  }
}
