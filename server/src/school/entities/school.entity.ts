import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm';

@Entity()
export class School extends BaseEntity {
    @PrimaryGeneratedColumn()
    school_id: number;

    @Column({length: 250})
    school_thai_name: string;

    @Column({length: 100})
    school_address_number: string;

    @Column({length: 45})
    school_zone: string;

    @Column({length: 45})
    school_english_name: string;

    @Column({length: 250})
    school_road: string;

    @Column({length: 250})
    school_subdistrict: string;

    @Column({length: 250})
    school_district: string;

    @Column({length: 250})
    school_province: string;

    @Column({length: 10})
    school_postcode: string;

    @Column({length: 250, default: 'logo.png'})
    school_logo_path: string;

    @Column()
    coordinate_teacher_id: number;

    @Column({default: false})
    school_isdelete: boolean;

    @UpdateDateColumn()
    school_last_update: Date;

    @Column({length: 5})
    school_code_url: string;
}
