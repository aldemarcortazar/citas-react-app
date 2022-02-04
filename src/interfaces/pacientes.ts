

export interface Ipaciente{
    id: string;
    namemascota:string;
    namepropietario:string;
    email:string;
    alta: string | number | readonly string[] | undefined;
    sintomas: string;
}