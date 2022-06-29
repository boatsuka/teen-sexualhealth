import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  user_loginname: string;

  @ApiProperty()
  @IsNotEmpty()
  user_password: string;

  @ApiProperty()
  @IsNotEmpty()
  user_full_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  user_email: string;

  @ApiProperty()
  @IsNotEmpty()
  user_telephone: string;
}