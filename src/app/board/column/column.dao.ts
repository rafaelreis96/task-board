import { Column } from './column.model';
import { Injectable } from '@angular/core';
import { AbstractDao } from '@app/core/services/abstract.dao';

@Injectable()
export class ColumnDao extends AbstractDao<Column>{

  constructor() {
    super('COLUMN');
  }

  override create(t: Column) : void {
    t.id = Math.floor(Math.random() * 1000000);
    super.create(t);
  }

}
