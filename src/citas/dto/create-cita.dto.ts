import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt, IsOptional, Min } from 'class-validator';

enum EstadoCita {
  PROGRAMADA = 'PROGRAMADA',
  COMPLETADA = 'COMPLETADA',
  CANCELADA = 'CANCELADA',
}

export class CreateCitaDto {
  @ApiProperty({
    example: 1,
    description: 'ID del paciente que tendrá la cita',
  })
  @IsInt()
  @Min(1)
  pacienteId: number;

  @ApiProperty({
    example: 1,
    description: 'ID del médico asignado a la cita',
  })
  @IsInt()
  @Min(1)
  medicoId: number;

  @ApiProperty({
    example: '2026-10-15T10:30:00.000Z',
    description: 'Fecha y hora de la cita',
  })
  @IsDateString()
  fechaHora: string;

  @ApiPropertyOptional({
    example: 'PROGRAMADA',
    enum: EstadoCita,
    description: 'Estado actual de la cita',
  })
  @IsOptional()
  @IsEnum(EstadoCita)
  estado?: EstadoCita;
}