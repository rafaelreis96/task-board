import { Note } from './note.model';
import { AbstractDao } from '@app/core/services/abstract.dao';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService extends AbstractDao<Note> {

  constructor() {
    super('NOTE');
  }

  override create(t: Note) : void {
    t.id = Math.floor(Math.random() * 1000000);
    super.create(t);
  }
}
