import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';
console.log(process.env.PORT)
@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor() {
        super({
            clientID: '',
            clientSecret: '',
            callbackURL: '', // Replace with your callback URL
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
        // Perform additional validation or save user details in the database
        // This method will be called after a successful authentication from GitHub

        const { id, displayName, username, photos } = profile;
        const user = {
            googleId: id,
            name: displayName,
            username: username,
            photo: photos[0].value
        };
        return { user, accessToken };

    }
}