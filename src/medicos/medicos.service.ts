import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class MedicosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.medico.findMany();
  }

  findOne(id: number) {
    return this.prisma.medico.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.medico.create({
      data,
    });
  }

  update(id: number, data: any) {
    return this.prisma.medico.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.medico.delete({
      where: { id },
    });
  }
}