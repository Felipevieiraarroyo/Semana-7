import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatePacienteDto {
  @ApiProperty({
    example: 'Ana',
    description: 'Nombre del paciente',
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @ApiProperty({
    example: 'García',
    description: 'Apellido del paciente',
  })
  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'Fecha de nacimiento del paciente',
  })
  @IsDateString(
    {},
    { message: 'La fecha de nacimiento debe ser una fecha válida' },
  )
  fechaNacimiento: string;

  @ApiProperty({
    example: '+5491112345678',
    description: 'Teléfono del paciente',
  })
  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono: string;

  @ApiProperty({
    example: 'ana@mail.com',
    description: 'Correo electrónico del paciente',
  })
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  email: string;
}