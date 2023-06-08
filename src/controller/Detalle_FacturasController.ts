import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Detalle_Factura} from "../entity/Detalle_Factura";

class Detalle_FacturasController {

    static getAll = async (req: Request, resp: Response) => {

         //Creamos el trycatch, para que el server no se caiga en posible error.
         try {
            //Creamos metodo de GetAll, Creamos instancia de AppDataSource.
            const DetFacRepo = AppDataSource.getRepository(Detalle_Factura)
            //Siempre vamos a usar un await, await = espere
            //Dentro del Find, podemos crear una condicion. Por ejemplo : 
            //find({where: {estado:true}})
            const ListaDetFacRepo = await DetFacRepo.find();
            //Creamos validacion para ver si hay datos en la tabala
            if (ListaDetFacRepo.length == 0) {
                return resp.status(404).json({ mensaje: 'No hay datos en la base de datos' });
            }
            //Siempre tiene que devolver un dato, para el cliente.
            // Y si en un caso si hubiera datos en la base de datos, 
            //devolvemos la lista de productos
            return resp.status(200).json(ListaDetFacRepo);
        } catch (error) {
            //En posible error, lo que hacemos es devolver el error
            return resp.status(400).json({ mensaje: error.error });
        }
    }
    static getById = async (req: Request, resp: Response) => {
    
    }

    static add = async (req: Request, resp: Response) => {

        
    }

    static update = async (req: Request, resp: Response) => {

    }
    static delete = async (req: Request, resp: Response) => {

    }
}

export default Detalle_FacturasController;