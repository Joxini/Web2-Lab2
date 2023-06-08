import { Router } from "express";
import Detalle_FacturasController from "../controller/Detalle_FacturasController";

const routes = Router();

routes.get("", Detalle_FacturasController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", Detalle_FacturasController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", Detalle_FacturasController.add);

export default routes;