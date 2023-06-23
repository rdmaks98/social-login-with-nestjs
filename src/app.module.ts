import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from '@nestjs/passport';
require('dotenv').config({ path: `./config.dev.env` })

console.log(process.env.PORT)
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
