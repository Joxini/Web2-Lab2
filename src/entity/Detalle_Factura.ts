import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class Detalle_Factura{
    //PrimaryColumn es para decirle que va a ser una llave primaria
    //PrimaryGeneratedColumn es para decirle que va a ser una llave primaria y que va a ser autoicrementar 
    @PrimaryColumn({type: 'int', unique: true})
    Numero:number;
    @Column({type: 'int',nullable:true})
    Cantidad:number;
    @ManyToOne(() => Producto, (producto) => producto.Codigo_Productos)
    @JoinColumn({name: 'Codigo_Productos'})
    producto: Producto;
}