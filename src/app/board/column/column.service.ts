import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Column } from './column.model';

@Injectable()
export class ColumnService {
  private readonly URL = environment.apiUrl + '/colunas';

  constructor(private http: HttpClient) { }

  create(column: Column) : Promise<Column | undefined> {
    return this.http.post<Column>(this.URL, column).toPromise();
  }

  findAll() : Promise<Column[] | undefined> {
    return this.http.get<Column[]>(`${this.URL}/?_embed=notas`).toPromise();
  }

}
