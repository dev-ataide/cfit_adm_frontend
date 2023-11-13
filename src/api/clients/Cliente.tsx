import { DateDataType } from "sequelize";

export interface Clientes {
    id: number;
    nome: string;
    servico: string;
    data: DateDataType;
    ida : boolean;
}