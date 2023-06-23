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
        //  @ts-ignore
        res.send(req.user);
    }


    @Get('/google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req: any) { }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req: any, @Res() res: any) {
        res.send(req.user);
    }
}
