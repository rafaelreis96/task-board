import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    BoardComponent,
    ColumnComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
