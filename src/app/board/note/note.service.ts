import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Note } from './note.model';

@Injectable()
export class NoteService {
  private readonly URL = environment.apiUrl + '/notas';

  constructor(private http: HttpClient) { }

  create(note: Note) : Observable<Note> {
    return this.http.post<Note>(this.URL, note);
  }

  update(id: number, note: Note) : Observable<Note> {
    return this.http.put<Note>(`${this.URL}/${id}`, note);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`);
  }

  findAll() : Observable<Note[]> {
    return this.http.get<Note[]>(this.URL);
  }

}
