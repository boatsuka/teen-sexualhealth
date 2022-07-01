import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm';

@Entity('student')
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn()
    student_id: number;

    @Column({ length: 50 })
    student_fisrtname: string;

    @Column()
    student_level: number;

    @Column({ default: "f" })
    student_gender: string;

    @Column({ length: 50 })
    student_lastname: string;

    @UpdateDateColumn()
    student_dob: Date;

    @Column()
    student_nickname: string;

    @Column()
    student_study_year: number;

    @Column({ length: 20 })
    student_initial_name: string;

    @Column({ default: "avater.png" })
    student_avatar_path: string;

    @Column({ default: "mp3" })
    student_name_sound_path: string;

    @Column()
    teacher_id: number;

    @Column()
    student_dragdrop: boolean;

    @Column({ default: false })
    student_isdelete: boolean;
}
