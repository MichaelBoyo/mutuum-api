import { Controller, Get, Post, Body } from '@nestjs/common';
import { SignedLegacy } from 'mina-signer/dist/node/mina-signer/src/types';
import { SignerService } from './signer.service';
import { SignerMessage } from 'src/dto/message.dto';

@Controller('signer')
export class SignerController {
  constructor(private readonly signerService: SignerService) {}

  @Get()
  getPrivateKey(): string {
    return this.signerService.getPrivateKey();
  }

  @Post()
  postSignedMessage(@Body() message: SignerMessage): SignedLegacy<string> {
    return this.signerService.getSignedMessage(message.data);
  }
}
