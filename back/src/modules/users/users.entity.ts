import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Institution } from '../institution/institution.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '../payment/payment.entity';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({
    description: 'UUIDV4 generado por la BBDD',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Máximo 50 caracteres',
    example: 'Juan',
  })
  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @ApiProperty({
    description: 'Máximo 50 caracteres',
    example: 'García',
  })
  @Column({
    type: 'varchar',
    length: 50,
  })
  lastname: string;

  @ApiProperty({
    description: 'Email',
    example: 'email@email.com',
  })
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  email: string;

  @ApiProperty({
    description: 'DNI del usuario',
    example: 12345678,
  })
  @Column({
    type: 'varchar',
    length: 8,
  })
  dni: string;

  @ApiProperty({
    example: 'Calle falsa 123',
  })
  @Column({ type: 'varchar', length: 80 })
  address: string;

  @ApiProperty({
    example: '123456789',
  })
  @Column({ type: 'varchar' })
  phone: string;

  @ApiProperty({
    description: 'URL de cloudinary',
  })
  @Column({
    type: 'varchar',
    length: 130,
    nullable: true,
  })
  imgProfile?: string;

  @ApiProperty({
    description: 'role de usuario',
  })
  @Column({ type: 'varchar', length: 50, default: 'student' })
  role: string;

  @ApiProperty({
    description: 'Indica si un usuario es Admin',
  })
  @Column({ type: 'varchar', length: 50, default: false })
  isAdmin: boolean;

  @ManyToOne(() => Institution, (institution) => institution.user_id)
  institution: Institution;

  @OneToMany(() => Payment, (payment) => payment.pdfImage)
  payments: Payment[];
}
