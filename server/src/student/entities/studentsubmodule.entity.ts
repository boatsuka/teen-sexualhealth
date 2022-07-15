import { LearningLog } from "src/submodule/entities/lerninglog.entity";
import { SubModule } from "src/submodule/entities/submodule.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity('student_submodule')
export class StudentSubModule extends BaseEntity {
    @PrimaryGeneratedColumn()
    student_submodule_id: number

    @Column()
    student_submodule_status: number

    @Column()
    student_submodule_progress: number

    // @Column()
    // submodule_id: number
    @ManyToOne(() => SubModule, submodule => submodule.submodule_id)
    submodule: SubModule

    // @Column()
    // student_id: number
    @ManyToOne(() => Student, student => student.student_id)
    student: Student

    @OneToMany(()=> LearningLog, learningLog=> learningLog.learninglog_id)
    learningLog : LearningLog[]
}