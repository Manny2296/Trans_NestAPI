import { Maquina } from './maquina.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class MaquinasService 
{
    constructor(@InjectRepository(Maquina) private maquinarepository: Repository<Maquina>)
    {
        
    }


    //deme maq
async getmaquinas():Promise<Maquina[]> 
{
  return await this.maquinarepository.find();
}
async crearMaquina(maquina:Maquina)
{
    this.maquinarepository.save(maquina);
}

async getMaquinaById(id_maquina:number):Promise<Maquina[]>
{
return await this.maquinarepository.find({where:[{"id_maquina":id_maquina}]})
}

async getMaquinaXNombre(nombre:string):Promise<Maquina[]> 
{
return await this.maquinarepository.find({where:[{"nombre":nombre}]})
}


}
