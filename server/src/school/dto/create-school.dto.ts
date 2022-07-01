import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSchoolDto {
    @ApiProperty()
    @IsNotEmpty()
    school_thai_name: string;

    @ApiProperty()
    @IsNotEmpty()
    school_address_number: string;

    @ApiProperty()
    @IsNotEmpty()
    school_zone: string;

    @ApiProperty()
    @IsNotEmpty()
    school_english_name: string;

    @ApiProperty()
    @IsNotEmpty()
    school_road: string;

    @ApiProperty()
    @IsNotEmpty()
    school_subdistrict: string;

    @ApiProperty()
    @IsNotEmpty()
    school_district: string;

    @ApiProperty()
    @IsNotEmpty()
    school_province: string;

    @ApiProperty()
    @IsNotEmpty()
    school_postcode: string;

    @ApiProperty()
    @IsNotEmpty()
    coordinate_teacher_id: number;

    @ApiProperty()
    @IsNotEmpty()
    school_code_url: string;
}
