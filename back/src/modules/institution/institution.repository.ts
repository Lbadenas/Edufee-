import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from './institution.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionRepository {
  //   constructor(
  //     @InjectRepository(Institution)
  //     private readonly institutionRepository: Repository<Institution>,
  //   ) {}
  //   async getAllInstitutions(page: number, limit: number) {
  //     const skip = (page - 1) * limit;
  //     const institutions = await this.institutionRepository.find({
  //       take: limit,
  //       skip: skip,
  //     });
  //     return institutions;
  //   }
}
