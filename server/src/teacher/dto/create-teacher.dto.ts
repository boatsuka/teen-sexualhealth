import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
    @ApiProperty()
    @IsNotEmpty()
    teacher_thai_firstname: string;

    @ApiProperty()
    @IsNotEmpty()
    teache_thai_lastname: string;

    @ApiProperty()
    @IsNotEmpty()
    teacher_nick_name: string;

    @ApiProperty()
    @IsNotEmpty()
    teacher_nickname_sound_path: string;

    @ApiProperty()
    @IsNotEmpty()
    teacher_image_path: string;

    @ApiProperty()
    @IsNotEmpty()
    school_id: number;
}
