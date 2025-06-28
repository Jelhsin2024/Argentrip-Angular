export interface IProduct {
    id:          number;
    nombre:      string;
    descripcion: string;
    precio:      string;
    foto:        string;
    tipo:        string;
}

export interface Product {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    rutaFoto: string;
    rutaFotoBase64?: string;
}