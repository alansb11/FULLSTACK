import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Usuario, Rol } from './entities/usuario.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existe = await this.usuarioRepo.findOne({ where: { username: dto.username } });
    if (existe) {
      throw new ConflictException('El nombre de usuario ya existe');
    }

    if (dto.rol === Rol.ESTUDIANTE && !dto.idEstudiante) {
      throw new BadRequestException('idEstudiante es requerido para el rol estudiante');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const usuario = this.usuarioRepo.create({
      username: dto.username,
      password: passwordHash,
      rol: dto.rol,
      idEstudiante: dto.rol === Rol.ESTUDIANTE ? dto.idEstudiante : null,
    });

    const guardado = await this.usuarioRepo.save(usuario);

    // nunca regreses el password, ni siquiera el hash
    const { password, ...resultado } = guardado;
    return resultado;
  }

  async login(dto: LoginDto) {
    const usuario = await this.usuarioRepo.findOne({ where: { username: dto.username } });
    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const passwordValido = await bcrypt.compare(dto.password, usuario.password);
    if (!passwordValido) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: usuario.idUsuario,
      username: usuario.username,
      rol: usuario.rol,
      idEstudiante: usuario.idEstudiante,
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        idUsuario: usuario.idUsuario,
        username: usuario.username,
        rol: usuario.rol,
        idEstudiante: usuario.idEstudiante,
      },
    };
  }
}