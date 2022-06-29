import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    user_loginname: string;

    @ApiProperty()
    @IsNotEmpty()
    user_password: string;
}