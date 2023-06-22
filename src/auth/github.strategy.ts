import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor() {
        super({
            clientID: '0f68b11adfaa1025136d',
            clientSecret: '84f279d27e6378b07286e3981818df07048f0940',
            callbackURL: 'http://localhost:2020/auth/github/callback', // Replace with your callback URL
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
        // Perform additional validation or save user details in the database
        // This method will be called after a successful authentication from GitHub
        return { profile, accessToken };
    }
}