import { Body, Controller, Get, Post } from '@nestjs/common';
import { CitasService } from './citas.service.js';
import { CreateCitaDto } from './dto/create-cita.dto.js';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Citas')
@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @ApiOperation({summary: 'Crea una nueva cita'})
  @Post()
  create(@Body() dto: CreateCitaDto) {
    return this.citasService.create(dto);
  }

  @ApiOperation({summary: 'Lista todas las citas'})
  @Get()
  findAll() {
    return this.citasService.findAll();
  }
}