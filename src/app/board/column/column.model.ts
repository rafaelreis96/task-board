import { Note } from './../note/note.model';

export interface Column {
  id: number;
  titulo: string;
  notas: Note[];
}
