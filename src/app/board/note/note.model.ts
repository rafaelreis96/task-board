import { Periodo } from './periodo.model';
import { Column } from './../column/column.model';

export interface Note {
  id: number,
  titulo: string;
  descricao: string;
  periodo: Periodo;
  coluna?: Column;
  data_modificacao: Date;
  data_criacao: Date;
}
