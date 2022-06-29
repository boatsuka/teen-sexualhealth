import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { userRoles } from '../../utils/role.enum'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ length: 45 })
  user_loginname: string;

  @Column({ length: 250 })
  user_password: string;

  @Column({ length: 30, default: userRoles.NORMAL_ROLE })
  user_role: string;

  @Column({ default: 0 })
  teacher_id: string;

  @Column({ length: 100 })
  user_full_name: string;

  @Column({ default: 0 })
  school_id: string;

  @Column({ length: 100 })
  user_email: string;

  @Column({ length: 45 })
  user_telephone: string;

  @Column({ length: 250, default: 'avatar' })
  user_image_path: string;

  @Column({ default: false })
  user_isdelete: boolean;

  @UpdateDateColumn()
  user_last_update: Date;
}
