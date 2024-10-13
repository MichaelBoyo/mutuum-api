import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegramRequest } from './dto/telegram.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() request: Request): string {
    console.log('request');
    console.log(request); // Example: 127.0.0.1
    return this.appService.getHello();
  }
  @Post()
  postHello(@Body() telegramRequest: TelegramRequest) {
    console.log('request');
    console.log(telegramRequest); // Example: 127.0.0.1

    return this.appService.handleMessage(telegramRequest);
  }
}
