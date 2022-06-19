import { Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractService<T, N extends Number> {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(String) protected apiUrl: string ) { }

  create(t: T) : Observable<T> {
    return this.http.post<T>(this.apiUrl, t);
  }

  update(id: N, t: T) : Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${id}`, t);
  }

  patch(id: N, t: Partial<T>) : Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${id}`, t);
  }

  delete(id: N) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  findById(id: N) : Observable<T> {
    return this.http.get<T>(this.apiUrl);
  }

  filter(t: Partial<T>) : Observable<T[]> {
    const options = {
      params: (function() {
        const myParams = new HttpParams();
        Object.entries(t).forEach(([k, v]) => myParams.set(String(k), String(v)) );
        return myParams;
      })()
    }

    return this.http.get<T[]>(this.apiUrl, options);
  }

  findAll() : Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

}
