import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { SubModule } from './submodule.entity';

@Entity()
export class Module extends BaseEntity {
    @PrimaryGeneratedColumn()
    module_id: number

    @Column({ length: 250 })
    module_name: string

    @Column()
    module_level: number

    @Column({ length: 250 })
    module_description: string

    @Column({ length: 250 })
    module_image_path: string

    @Column({ length: 46 })
    modulecol: string

    @OneToMany(() => SubModule, subModule => subModule.submodule_id)
    submodules: SubModule[];
}
