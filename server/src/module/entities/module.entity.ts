import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
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

}
