import { Client } from 'mina-signer';
import { SignedLegacy } from 'mina-signer/dist/node/mina-signer/src/types';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SignerService {
  private CLIENT: Client;
  private PRIVATE_KEY: string;

  constructor(private configService: ConfigService) {
    this.CLIENT = new Client({ network: 'mainnet' });
    this.PRIVATE_KEY = this.configService.get<string>('PRIVATE_KEY');
  }

  getPrivateKey(): string {
    return this.PRIVATE_KEY;
  }

  getSignedMessage(data: string): SignedLegacy<string> {
    return this.CLIENT.signMessage(data, this.PRIVATE_KEY);
  }
}
