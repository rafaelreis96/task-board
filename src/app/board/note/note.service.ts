import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Note } from './note.model';

@Injectable()
export class NoteService {
  private readonly URL = environment.apiUrl + '/notas';

  constructor(private http: HttpClient) { }

  create(note: Note) : Promise<Note | undefined> {
    return this.http.post<Note>(this.URL, note).toPromise();
  }

  findAll() : Promise<Note[] | undefined> {
    return this.http.get<Note[]>(this.URL).toPromise();
  }

}
