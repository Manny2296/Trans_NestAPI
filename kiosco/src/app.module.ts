import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaquinasModule } from './maquinas/maquinas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransaccionController } from './transaccion/transaccion.controller';
import { TransaccionService } from './transaccion/transaccion.service';
import { TransaccionModule } from './transaccion/transaccion.module';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forRoot(),MaquinasModule, TransaccionModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
