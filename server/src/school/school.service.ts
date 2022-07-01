import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School) private schoolRepository: Repository<School>
  ) { }

  create(createSchoolDto: CreateSchoolDto) {
    return this.schoolRepository.save(createSchoolDto);
  }

  findAll() {
    return this.schoolRepository.find();
  }

  findOne(id: number) {
    return this.schoolRepository.findOne({ where: { school_id: id } });
  }

  // findByStudent(id: number) {
  //   return this.schoolRepository.query(``)
  // }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return this.schoolRepository.delete(id);
  }
}
