import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {

  constructor(
    @InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>
  ) { }

  create(createTeacherDto: CreateTeacherDto) {
    return this.teacherRepository.save(createTeacherDto);
  }

  findAll() {
    return this.teacherRepository.find();
  }

  findOne(id: number) {
    return this.teacherRepository.findOne({ where: { teacher_id: id } });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return this.teacherRepository.delete(id);
  }
}
