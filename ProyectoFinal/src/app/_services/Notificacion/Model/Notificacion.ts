import { trabajador } from "../../Trabajador/model/Trabajador";
import { Prestamo } from "../../Prestamo/model/Prestamo";

export class Notificacion{
    id: number;
    mensaje: String;
    leido: boolean;
    codtrabajador:trabajador;
    codprestamo:Prestamo;
    trabajadorrecibe:trabajador;
}
