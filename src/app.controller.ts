import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegramRequest } from './dto/telegram.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postHello(@Body() telegramRequest: TelegramRequest) {
    console.log('request');
    console.log(telegramRequest); // Example: 127.0.0.1

    return this.appService.handleMessage(telegramRequest);
  }
}
