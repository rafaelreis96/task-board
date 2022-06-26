import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Column } from './column.model';

@Injectable()
export class ColumnService {
  private readonly URL = environment.apiUrl + '/colunas';

  constructor(private http: HttpClient) { }

  create(column: Column) : Observable<Column> {
    return this.http.post<Column>(this.URL, column);
  }

  findAll() : Observable<Column[]> {
    return this.http.get<Column[]>(`${this.URL}/?_embed=notas`);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`);
  }

}
