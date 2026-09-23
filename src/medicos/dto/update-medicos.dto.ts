import { PartialType } from '@nestjs/swagger';
import { CreateMedicosDto } from './create-medicos.dto.js'

export class UpdateMedicosDto extends PartialType(CreateMedicosDto) {}