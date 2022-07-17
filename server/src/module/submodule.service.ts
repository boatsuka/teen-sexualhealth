import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { StudentSubModule } from 'src/student/entities/studentsubmodule.entity';
import { Repository } from 'typeorm';
import { SubModule } from './entities/submodule.entity';

@Injectable()
export class SubmoduleService {
    constructor(
        @InjectRepository(SubModule) private subModuleRepository: Repository<SubModule>,
        @InjectRepository(StudentSubModule) private studentSubmMduleRepo: Repository<StudentSubModule>,
    ) { }

    findAll() {
        return this.subModuleRepository.find({ relations: ['section'] });
    }

    findSubModule(id: number) {
        // return this.studentSubmodule.find({ relations: ['student'] })
        return this.studentSubmMduleRepo.find({
            relations: ['student', 'submodule'],
            where: {
                student: { student_id: id }
            }
        })
        // return this.studentRepository.find()
    }
}
