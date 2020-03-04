import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Maquina {

    @PrimaryGeneratedColumn()
    id_maquina:number;
    @Column({length:100})
    nombre:string;
    @Column({length:50})
    ip_maquina:string;
    @Column()
    n_tarjetas:number;
}
