import { Transaccion } from './transaccion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

@Injectable()
export class TransaccionService {
    constructor(@InjectRepository(Transaccion)  private transaccionRepository : Repository<Transaccion> ){}

async getTransacciones() : Promise<Transaccion[]>{
return await this.transaccionRepository.find();
}

async getTotalTransaccionesxMaquina() : Promise<string>{
    const { sum } = await this.transaccionRepository
    .createQueryBuilder("transaccion")
    .select("SUM(transaccion.valor_transaccion)", "sum")
    .where("nobremaquina = 'kiosco1'")//, { id: 1 }
    .getRawOne();
    
return sum;
}
}
