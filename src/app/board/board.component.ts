import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Column } from './column/column.model';
import { Note } from './note/note.model';

import { NovoColumnDialogComponent } from './column/novo-column-dialog/novo-column-dialog.component';
import { NovoNoteDialogComponent } from './note/novo-note-dialog/novo-note-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns!: Column[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.columns = [
      {titulo: "A Fazer"},
      {titulo: "Em Andamento"},
      {titulo: "Finalizados"}
    ];
  }

  novoColumnDialog() {
    const dialogRef = this.dialog.open(NovoColumnDialogComponent, {
      panelClass: "dialog-sm",
    });
    dialogRef.afterClosed().subscribe( (column: Column) => {
      if(column != null)
        this.columns.push(column);
    })
  }

  novoNoteDialog() {
    const dialogRef = this.dialog.open(NovoNoteDialogComponent, {
      panelClass: "dialog-lg",
      data: {
        columns: this.columns
      }
    });
    dialogRef.afterClosed().subscribe( (note: Note) => {
      console.log(note)
      if(note != null) {
        const i = this.columns.findIndex(c => c.titulo == note.coluna.titulo);
        console.log(i)
        if(i !== -1) {

          if(!this.columns[i].notes) {
            this.columns[i].notes = [];
          }

          this.columns[i].notes?.push(note);
        }
      }
    })
  }

}
