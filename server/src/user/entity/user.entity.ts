import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ length: 45 })
  user_loginname: string;

  @Column({ length: 250 })
  user_password: string;

  @Column({ length: 30 })
  user_role: string;

  @Column()
  teacher_id: string;

  @Column({ length: 100 })
  user_full_name: string;

  @Column()
  school_id: string;

  @Column({ length: 100 })
  user_email: string;

  @Column({ length: 45 })
  user_telephone: string;

  @Column({ length: 250 })
  user_image_path: string;

  @Column({ default: false })
  user_isdelete: boolean;

  @UpdateDateColumn()
  user_last_update: Date;
}
