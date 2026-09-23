import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'usuario@mail.com',
    description: 'Correo electrónico del usuario',
  })
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;

  @ApiProperty({
    example: 'RECEPCIONISTA',
    description: 'Rol del usuario',
  })
  @IsString()
  @IsNotEmpty({ message: 'El rol es obligatorio' })
  role: string;
}