import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';
import { NoteComponent } from './note/note.component';
import { SharedModule } from '@app/shared/shared.module';
import { NovoColumnDialogComponent } from './column/novo-column-dialog/novo-column-dialog.component';
import { NovoNoteDialogComponent } from './note/novo-note-dialog/novo-note-dialog.component';


@NgModule({
  declarations: [
    BoardComponent,
    ColumnComponent,
    NoteComponent,
    NovoColumnDialogComponent,
    NovoNoteDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
