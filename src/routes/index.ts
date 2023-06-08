import { Router } from "express";
import producto from "./productos";
import Proveedor from "./Proveedores";
import Vendedor from "./Vendedores";
import Cliente  from "./Clientes";
import Cabecera_Factura  from "./Cabecera_Facturas";
import Detalle_Factura  from "./Detalle_Facturas";


const routes = Router();

routes.use('/Productos',producto);
routes.use('/Proveedores',Proveedor);
routes.use('/Vendedores',Vendedor);
routes.use('/Clientes',Cliente);
routes.use('/Cabecera_Facturas',Cabecera_Factura);
routes.use('/Detalle_Facturas',Detalle_Factura);




export default routes;