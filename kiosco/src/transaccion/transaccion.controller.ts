import { TransaccionService } from './transaccion.service';
import { Controller, Get } from '@nestjs/common';

@Controller('transaccion')
export class TransaccionController {
constructor(private transaccionServicio : TransaccionService){ 
}
   
@Get()
getTransacciones(){
   return this.transaccionServicio.getTransacciones();
}
@Get('suma')//transaccion/suma
getTotalTransaccionesxMaquina(){
 // return this.transaccionServicio.getTotalTransaccionesxMaquina();
return this.transaccionServicio.getTotalTransaccionesxMaquina();
}

} 