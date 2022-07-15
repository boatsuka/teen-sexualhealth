import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { Section } from './section.entity';

@Entity('student')
export class SubModule extends BaseEntity {
    @PrimaryGeneratedColumn()
    submodule_id: number

    @Column({ length: 250 })
    submodule_name: string

    @Column({ length: 250 })
    submodule_description: string

    // @Column()
    // module_id: number
    @ManyToOne(() => Section, section => section.module_id)
    section = Section

    @Column()
    submodule_level: number

    @Column({ length: 1 })
    submodule_gender: string

    @Column()
    submodule_isdelete: boolean

    @UpdateDateColumn()
    submodule_lastupdate: Date

}
