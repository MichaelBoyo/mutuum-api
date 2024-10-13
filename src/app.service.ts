import { Injectable } from '@nestjs/common';
import { TelegramRequest } from './dto/telegram.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  TOKEN = this.configService.get<string>('TELEGRAM_KEY');

  getHello(): string {
    return 'Hello World!';
  }
  getAxiosInstance() {
    const BASE_URL = `https://api.telegram.org/bot${this.TOKEN}`;
    return {
      get(method: string, params: any) {
        return axios.get(`${BASE_URL}/${method}`, { params });
      },
      post(method: string, data: any) {
        return axios.post(`${BASE_URL}/${method}`, data);
      },
    };
  }
  sendMessage(messageObj: TelegramRequest, messagetext: string) {
    return this.getAxiosInstance().post('sendMessage', {
      chat_id: messageObj.message.chat.id,
      text: messagetext,
    });
  }
  handleTelegramMessage(messageObj: TelegramRequest) {
    const messageText = messageObj.message.text;
    // check if its a command
    if (messageText.startsWith('/')) {
      const command = messageText.slice(1); // remove the '/'

      switch (command) {
        case 'start':
          return this.sendMessage(
            messageObj,
            'Hello! I am a simple Telegram bot. Type /help for available commands.',
          );
        case 'help':
          return this.sendMessage(
            messageObj,
            'Here are my available commands: /help, /echo',
          );
        case 'echo':
          return this.sendMessage(messageObj, `Echo: ${messageText.slice(6)}`); // remove '/echo '

        // add more commands here
        default:
          return this.sendMessage(messageObj, 'Unknown command');
      }
    } else {
      return this.sendMessage(messageObj, 'an error occurred');
    }
  }
  handleMessage(telegramMessage: TelegramRequest) {
    this.handleTelegramMessage(telegramMessage);
  }
}
