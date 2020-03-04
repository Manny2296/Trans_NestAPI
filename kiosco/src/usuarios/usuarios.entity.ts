import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
@Entity()
export class Usuarios {

    @PrimaryGeneratedColumn()
    id_usuario:number;
    @Column({length:10})
    usuario:string;
    @Column({length:10})
    pass:string;
    @Column({length:50})
    nombres:string;
    @Column({length:50})
    apellidos:string;
    @Column()
    cedula:number;
    @Column({length:50})
    cargo:string;
    

}
//ESta es la clase donde se serializa