import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicosDto } from './create-medicos.dto.js'

export class UpdateMedicosDto extends PartialType(CreateMedicosDto) {}