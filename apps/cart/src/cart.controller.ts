import { Controller, Get } from "@nestjs/common";

@Controller('cart')
export class CartController {

  constructor() {}

  @Get()
  getHello(): any {
    return { msg: 'Hello World!' };
  }
}
