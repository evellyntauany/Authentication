import { ReactNode } from "react";

export enum statusEnum{
    aberto, 
    encerrado,
    pendente_usuário,
    pedente_solucionado, 
    cancelado,
}



export type description ={
    id?:number;
    description: string;
}

export type Ichamado = {
    userId: number
    createdAt: ReactNode;
    description: string
    id: number;
    status: statusEnum
    updatedAt: ReactNode
  }

