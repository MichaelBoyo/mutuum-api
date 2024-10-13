import { Controller, Get, Request } from '@nestjs/common';
import { SignerService } from './signer.service';

@Controller('signer')
export class SignerController {
  constructor(private readonly signerService: SignerService) {}

  @Get()
  getPrivateKey(@Request() request: Request): string {
    console.log(request); // Example: 127.0.0.1
    return this.signerService.getPrivateKey();
  }
}
