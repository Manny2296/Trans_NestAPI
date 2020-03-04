import { Maquina } from './maquina.entity';
import { Module } from '@nestjs/common';
import { MaquinasService } from './maquinas.service';
import { MaquinasController } from './maquinas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Maquina])],
  providers: [MaquinasService],
  controllers: [MaquinasController]
})
export class MaquinasModule {}
