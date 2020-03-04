import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Transaccion {
    @PrimaryGeneratedColumn()
    id_transaccion : number; 
    @Column({length:50})
    tipo_transaccion : string;
    @Column()
    valor_transaccion : number;
    @Column({length:50})
    fecha:string;
    @Column({length:50})
    hora: string; 
    @Column({length:100})
    idtarjeta: string; 
    @Column({length:50})
    nobremaquina: string; 
    @Column({length:100})
    ipmaquina: string;
    @Column()
    valor_recarga: number;    


}
