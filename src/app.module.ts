import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SignerModule } from './signer/signer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SignerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
