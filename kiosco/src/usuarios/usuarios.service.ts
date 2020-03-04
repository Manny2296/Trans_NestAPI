import { Injectable, ForbiddenException } from '@nestjs/common';
import { Usuarios } from './usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

    constructor(@InjectRepository(Usuarios) private usuariosrepository: Repository<Usuarios>)
    {
        
    }

    async getusuarios():Promise<Usuarios[]> 
    {
      return await this.usuariosrepository.find();
    }
    async crearUsuarios(usuario:Usuarios)
    {
        this.usuariosrepository.save(usuario);
    }
    async getUser(_id:string): Promise<Usuarios[]>{
      return await this.usuariosrepository.find({
         
          //select:["idusuario","name","surname","id_Document","mail","password","telephone","image_user"],
          where:[{"usuario": _id}]
      })
  

  }

  async validateUser(username: string, passw: string): Promise<any> {
    const user = await this.usuariosrepository.find({
         
      //select:["idusuario","name","surname","id_Document","mail","password","telephone","image_user"],
      where:[{"usuario": username}]
  });
    console.log("Usuario a comparar" + user[0].nombres)
    if (user[0] && user[0].pass === passw) {
      const { pass, ...result } = user[0];
      console.log("Password correcto")
      return result;
    }
    console.log("Password incorrecto ")
    throw new ForbiddenException();
  }


}
//ESte tambienebbe configurarlo

