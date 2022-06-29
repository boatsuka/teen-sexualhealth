import {BadRequestException, Body, Controller, NotFoundException, Post} from '@nestjs/common'
import {CreateUserDto} from '../user/dto/user.dto'
import { UserService } from 'src/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        const user = this.userService.findByUsername(loginUserDto.user_loginname);

        if (!user) {
            throw new NotFoundException('User not found');
        }
        
        return user;
    }
}