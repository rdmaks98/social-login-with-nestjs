import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './github.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'github' }),
    ],
    providers: [GithubStrategy],
    controllers: [AuthController],
})
export class AuthModule {

}
