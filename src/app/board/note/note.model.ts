import { Column } from './../column/column.model';

export interface Note {
  titulo: string;
  descricao: string;
  coluna: Column,
  datas: {
    inicio: Date;
    termino: Date;
  }
  data_modificacao: Date;
  data_criacao: Date;
}
