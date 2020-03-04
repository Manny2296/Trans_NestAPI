import { TransaccionService } from './transaccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Transaccion } from './transaccion.entity';
import { TransaccionController } from './transaccion.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Transaccion])],
    providers:[TransaccionService],
    controllers:[TransaccionController]
})
export class TransaccionModule {}
