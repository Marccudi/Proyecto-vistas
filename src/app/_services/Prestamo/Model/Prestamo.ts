import { trabajador } from "../../Trabajador/Model/trabajador";
import { Ejemplar } from "../../Ejemplar/Model/Ejemplar";
export class Prestamo{
    id: number;
    fechacaducidad: String;
    fechaalta: String;
    fechadevolución: String;
    codejemplar:Ejemplar;
    trabajadorrecibe:trabajador;
    trabajadorpresta:trabajador;
}
