import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { SchoolModule } from './school/school.module';
import { TeacherModule } from './teacher/teacher.module';


@Module({
  imports: [
    UserModule,
    AuthModule,
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sexualhealth',
      password: '%sexualhealth00123@',
      database: 'sexualhealth',
      logging: false,
      synchronize: true,
      autoLoadEntities: true,
      entities: [__dirname + '../**/*.entity{.ts,.js}'],
    }),
    SchoolModule,
    TeacherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
