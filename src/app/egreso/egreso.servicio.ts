import { Egreso } from './egreso.model';

export class EgresoServicio {
    egresos:Egreso[] = [
        new Egreso("Ropa", 200),
        new Egreso("Renta  dept", 900)
    ];
    
    eliminar(ingreso: Egreso){
        const indice: number = this.egresos.indexOf(ingreso);
        this.egresos.splice(indice, 1);
    }
}