import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateMedicosDto {
  @ApiProperty({
    example: 'Carlos',
    description: 'Nombre del médico',
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @ApiProperty({
    example: 'García',
    description: 'Apellido del médico',
  })
  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string;

  @ApiProperty({
    example: '1985-06-15',
    description: 'Fecha de nacimiento del médico',
  })
  @IsDateString(
    {},
    { message: 'La fecha de nacimiento debe ser una fecha válida' },
  )
  fechaNacimiento: string;

  @ApiProperty({
    example: '+5491112345678',
    description: 'Teléfono del médico',
  })
  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono: string;

  @ApiProperty({
    example: 'carlos@mail.com',
    description: 'Correo electrónico del médico',
  })
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  email: string;

  @ApiProperty({
    example: 1,
    description: 'ID de la especialidad del médico',
  })
  @IsInt({ message: 'La especialidadId debe ser un número entero' })
  especialidadId: number;
}