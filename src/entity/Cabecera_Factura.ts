import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Proveedor } from "./Proveedor";
import { Cliente } from "./Cliente";

@Entity()
export class Cabecera_Factura {
    //PrimaryColumn es para decirle que va a ser una llave primaria
    //PrimaryGeneratedColumn es para decirle que va a ser una llave primaria y que va a ser autoicrementar 
    @PrimaryColumn({type: 'int', unique: true})
    Numero: number;
    @Column({type: 'date',nullable:true})
    Fecha: Date;
    @OneToOne(() => Cliente)
    @JoinColumn({ name: 'Ruc_Cliente' })
    Ruc_Cliente: Cliente;
    
    @OneToOne(() => Proveedor)
    @JoinColumn({ name: 'Codigo_Vendedor' })
    Codigo_Vendedor: Proveedor;
}
