import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { MedicosService } from './medicos.service.js';
import { CreateMedicosDto } from './dto/create-medicos.dto.js';
import { UpdateMedicosDto } from './dto/update-medicos.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';

@ApiTags('Medicos')
@ApiBearerAuth()
@Controller('medicos')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA')
export class MedicosController {
  constructor(
    private readonly medicosService: MedicosService,
  ) {}

  @ApiOperation({ summary: 'Lista todos los médicos' })
  @Get()
  findAll() {
    return this.medicosService.findAll();
  }

  @ApiOperation({ summary: 'Busca un médico por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const medico = await this.medicosService.findOne(Number(id));

    if (!medico) {
      throw new NotFoundException('Médico no encontrado');
    }

    return medico;
  }

  @ApiOperation({ summary: 'Crea un nuevo médico' })
  @Post()
  create(@Body() dto: CreateMedicosDto) {
    return this.medicosService.create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un médico existente' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMedicosDto,
  ) {
    return this.medicosService.update(Number(id), dto);
  }

  @ApiOperation({ summary: 'Elimina un médico por ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicosService.remove(Number(id));
  }
}