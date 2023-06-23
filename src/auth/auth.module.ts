import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './github.strategy';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
    imports: [
        PassportModule,
        // PassportModule.register({ defaultStrategy: 'google' }),
    ],
    providers: [GithubStrategy, GoogleStrategy],
    controllers: [AuthController],
})
export class AuthModule {

}
