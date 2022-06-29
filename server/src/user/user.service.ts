import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService { 
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    async findAll() {
        return this.userRepository.find();
    }

    async findOne(id: string) {
        return this.userRepository.findOne({ where: { user_id: id } });
    }

    async findByUsername(loginname: string) {
        return this.userRepository.findOne({ where: { user_loginname: loginname } });
    }

    async create(data): Promise<User> {
        return this.userRepository.save(data)
    }

    async remove(id: string) {
        return this.userRepository.delete(id);
    }
}
