import { Usuarios } from './usuarios.entity';
import { Controller, Get, Param, Post, Request, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { userInfo } from 'os';

@Controller('usuarios')
export class UsuariosController{

    constructor(private usuariosServicio:UsuariosService){}

    @Get()
    getusuarios(){
        return this.usuariosServicio.getusuarios();

    }


    @Get(':id')
    findOne(@Param() params){
      console.log(params.id);
      return this.usuariosServicio.getUser(params.id)
    }

    @Post('/login')
    async login(@Body()user_passwd : string) {
      let userdata =JSON.stringify(user_passwd)
 //    let apercorrer = JSON.parse(user_passwd)
     var obj =JSON.parse(userdata);
      console.log("params" + obj.user_passwd+ "uss" + userdata);
      var username = obj.user_passwd.split('_')[0];
      var passwed = obj.user_passwd.split('_')[1]
      console.log("Usuario: " + username + "Password " + passwed) 
      return  this.usuariosServicio.validateUser(username,passwed);
    }
}
//ESTE ES EL QUE VA A TENER EL GET 