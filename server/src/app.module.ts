import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sexualhealth',
      password: '%sexualhealth00123@',
      database: 'sexualhealth',
      entities: [__dirname + 'src/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    SchoolModule,
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
