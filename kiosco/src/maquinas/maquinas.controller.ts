import { MaquinasService } from './maquinas.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('maquinas')
export class MaquinasController {
    
    constructor(private maquinasServicio:MaquinasService){}

    @Get()
    getMaquinas(){
        return this.maquinasServicio.getmaquinas();
    }
    
    @Get(':nombre')
    getMaquinaxNombre(@Param() params){
        return this.maquinasServicio.getMaquinaXNombre(params.nombre);
    }
}
