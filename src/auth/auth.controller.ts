import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {

    @Get('/github')
    @UseGuards(AuthGuard('github'))
    async githubLogin() {
        // Initiates the GitHub authentication process
    }

    @Get('github/callback')
    @UseGuards(AuthGuard('github'))
    async githubLoginCallback(@Req() req: Request, @Res() res: Response) {
        // Handles the GitHub authentication callback
        // @ts-ignore
        const { accessToken, profile } = req.user;
        // You can perform any additional actions or redirect the user to a specific page
        // after successful authentication
        res.send({ accessToken, profile });
    }
}
