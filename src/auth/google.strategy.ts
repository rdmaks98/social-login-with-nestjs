import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth2';
require('dotenv').config({ path: `./config.dev.env` })

console.log(process.env.PORT)

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: "",
            clientSecret: "",
            callbackURL: "",
            scope: ['profile', 'email'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
        console.log(profile)
        const { id, displayName, emails, picture } = profile;

        const user = {
            googleId: id,
            name: displayName,
            email: emails[0].value,
            photo: picture
        };
        done(null, user);
    }
}