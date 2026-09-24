import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PacientesService } from '../pacientes/pacientes.service.js';

@Injectable()
export class CitasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pacientesService: PacientesService,
  ) {}

  async create(data: {
    pacienteId: number;
    medicoId: number;
    fechaHora: string;
    estado?: 'PROGRAMADA' | 'COMPLETADA' | 'CANCELADA';
  }) {
    const paciente = await this.pacientesService.findOne(data.pacienteId);

    if (!paciente) {
      throw new NotFoundException('El paciente no existe');
    }

    return this.prisma.consulta.create({
      data: {
        pacienteId: data.pacienteId,
        medicoId: data.medicoId,
        fechaHora: new Date(data.fechaHora),
        ...(data.estado && {
          estado: data.estado,
        }),
      },
    });
  }

  findAll() {
    return this.prisma.consulta.findMany();
  }
}