import { StudentSubModule } from "src/student/entities/studentsubmodule.entity";
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('learninglog')
export class LearningLog extends BaseEntity {
    @PrimaryGeneratedColumn()
    learninglog_id: number

    @Column()
    learninglog_begin: Date

    @Column()
    learninglog_end: Date

    @Column("simple-json")
    learninglog_score: { score: string }

    // @Column()
    // student_submodule_id:number

    @ManyToOne(() => StudentSubModule, studentSubModule => studentSubModule.student_submodule_id)
    studentSubModule: StudentSubModule
}