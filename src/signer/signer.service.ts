import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SignerService {
  constructor(private configService: ConfigService) {}
  PRIVATE_KEY = this.configService.get<string>('PRIVATE_KEY');

  getPrivateKey(): string {
    return this.PRIVATE_KEY;
  }
}
