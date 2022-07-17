import { SubModule } from 'src/submodule/entities/submodule.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
} from 'typeorm';

@Entity('module')
export class Section extends BaseEntity {
    @PrimaryGeneratedColumn()
    module_id: number

    @Column({ length: 250 })
    module_name: string

    @Column()
    submodule_level: number

    @Column({ length: 250 })
    module_description: string

    @Column({ length: 250 })
    module_image_path: string

    @Column({ length: 45 })
    modulecol: string

    @OneToMany(() => SubModule, submodule => submodule.section)
    submodule: SubModule
}
