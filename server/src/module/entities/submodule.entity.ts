import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { Module } from './module.entity';

@Entity()
export class SubModule extends BaseEntity {
    @PrimaryGeneratedColumn()
    submodule_id:number

    @Column({ length: 250 })
    module_image_path: string

    @Column({ length: 46 })
    modulecol: string


    @Column({ length: 250 })
    submodule_name:string

    @Column({ length: 250 })
    submodule_description:string

    // @Column()
    // module_id:number
    @ManyToOne(() => Module, module => module.module_id)
    modules: Module;

    @Column()
    submodule_leve:number

    @Column({ default: "f" })
    submodule_gender:string

    @Column({ default: false })
    submodule_isdelete:boolean

    @UpdateDateColumn()
    submodule_lastupdate:Date
}
