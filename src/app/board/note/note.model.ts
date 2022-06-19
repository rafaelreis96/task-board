import { Periodo } from './periodo.model';
import { Column } from './../column/column.model';

export interface Note {
  id: number,
  titulo: string;
  descricao: string;
  periodo: Periodo;
  colunaId: number;
  data_modificacao: Date;
  data_criacao: Date;
}
