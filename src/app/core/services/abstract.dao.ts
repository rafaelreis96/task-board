import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractDao<T> {
  private dados: T[];

  constructor(@Inject(String) protected key: string ) {
    this.dados = JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  create(t: T) : void {
    this.dados.push(t);
    localStorage.setItem(this.key, JSON.stringify(this.dados));
  }

  update(t: T) : void {
    let index = this.dados.indexOf(t);
    if(index !== -1) {
      this.dados[index] = t;
    }
  }

  delete(t: T) : void {
    this.dados.splice(1, this.dados.indexOf(t));
  }

  findAll() : T[] {
    return this.dados;
  }

}
