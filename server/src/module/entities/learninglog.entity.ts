import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm';
import { StudentSubModule } from './studentsubmodule.entity';

@Entity()
export class LearningLog extends BaseEntity {
    @PrimaryGeneratedColumn()
    learninglog_id: number

    @Column()
    learninglog_begin: Date

    @Column({ type: 'date' })
    learninglog_end: Date

    @Column("simple-json")
    learninglog_score: { score: number }

    // @Column()
    // student_submodule_id
    @ManyToOne(() => StudentSubModule, studentdubmodule => studentdubmodule.student_submodule_id)
    studentdubmodule: StudentSubModule;
}
