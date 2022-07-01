import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
    @ApiProperty()
    @IsNotEmpty()
    student_fisrtname: string;

    @ApiProperty()
    @IsNotEmpty()
    student_lastname: string;

    @ApiProperty()
    @IsNotEmpty()
    student_level: number;

    @ApiProperty()
    @IsNotEmpty()
    student_nickname: string;

    @ApiProperty()
    @IsNotEmpty()
    student_study_year: number;

    @ApiProperty()
    @IsNotEmpty()
    student_initial_name: string;

    @ApiProperty()
    @IsNotEmpty()
    teacher_id: number;

    @ApiProperty()
    @IsNotEmpty()
    student_dragdrop: boolean;
}
