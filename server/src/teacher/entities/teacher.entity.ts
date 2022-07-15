import { School } from 'src/school/entities/school.entity';
import { Student } from 'src/student/entities/student.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToOne,
} from 'typeorm';

@Entity('teacher')
export class Teacher extends BaseEntity {
    @PrimaryGeneratedColumn()
    teacher_id: number;

    @Column({ length: 50 })
    teacher_thai_firstname: string;

    @Column({ length: 50 })
    teache_thai_lastname: string;

    @Column({ length: 50 })
    teacher_nick_name: string;

    @Column({ length: 250 })
    teacher_nickname_sound_path: string;

    @Column({ length: 250 })
    teacher_image_path: string;

    // @Column()
    // school_id: number;
    @ManyToOne(() => School, school => school.school_id)
    school: School

    @OneToMany(() => Student, student => student.teacher)
    students: Student[];


}
