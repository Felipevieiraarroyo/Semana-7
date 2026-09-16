import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class PacientesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.paciente.findMany();
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.paciente.create({
      data,
    });
  }

  update(id: number, data: any) {
    return this.prisma.paciente.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}