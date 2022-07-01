import { BadRequestException, Body, Controller, Get, NotFoundException, Post, Res } from '@nestjs/common'
import { CreateUserDto } from '../user/dto/user.dto'
import { UserService } from 'src/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) response: Response) {
        const user = await this.userService.findByUsername(loginUserDto.user_loginname);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!await bcrypt.compare(loginUserDto.user_password, user.user_password)) {
            throw new BadRequestException('Invalid credentials');
        }

        const jwt = await this.jwtService.signAsync({ id: user.user_id, school: user.school_id, teacher: user.teacher_id })

        response.cookie('jwt', jwt, { httpOnly: true })

        return user;
    }

    @Get('user')
    async user(@Res() req: Request) {
        const cookie = req.cookies['jwt'];

        const data = await this.jwtService.verifyAsync(cookie);

        return this.userService.findOne(data['id'])
    }
}