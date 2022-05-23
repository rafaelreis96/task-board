import { Note } from './../note/note.model';

export interface Column {
  titulo: string;
  notes?: Note[];
}
