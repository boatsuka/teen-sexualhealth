import { Student } from 'src/student/entities/student.entity';
import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { LearningLog } from './learninglog.entity';
import { SubModule } from './submodule.entity';

@Entity()
export class StudentSubModule extends BaseEntity {
    @PrimaryGeneratedColumn()
    student_submodule_id:number

    @Column()
    student_submodule_status:number

    // @Column()
    // submodule_id:number
    @ManyToOne(() => SubModule, submodule => submodule.submodule_id)
    submodule: SubModule;

    // @Column()
    // student_id:number
    @ManyToOne(() => Student, student => student.student_id)
    student: Student;

    @OneToMany(() => LearningLog, learninglog=>learninglog.learninglog_id)
    learninglog:LearningLog
}
