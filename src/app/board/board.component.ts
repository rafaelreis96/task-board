import { NoteService } from './note/note.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Column } from './column/column.model';
import { Note } from './note/note.model';

import { NovoColumnDialogComponent } from './column/novo-column-dialog/novo-column-dialog.component';
import { NovoNoteDialogComponent } from './note/novo-note-dialog/novo-note-dialog.component';

import { ColumnService } from './column/column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns: Column[] = [];
  primeiraNotaSemColuna: boolean = false;

  constructor(
    public dialog: MatDialog,
    private columnService: ColumnService,
    private noteService: NoteService) { }

  ngOnInit(): void {

    this.columns = this.columnService.findAll();
    this.columns.forEach( c => {
      c.notes = [];
      this.noteService.findAll().forEach(note => {
        if(note) {
          const i = this.columns.findIndex(c => c.id == note.coluna?.id);
          if(i !== -1) {
            this.columns[i].notes?.push(note);
            console.log(this.columns)
          }
        }
      });
    });

  }

  novoColumnDialog() {
    const dialogRef = this.dialog.open(NovoColumnDialogComponent, {
      panelClass: "dialog-sm",
    });
    dialogRef.afterClosed().subscribe( (column: Column) => {
      if(column) {
       // this.columns.push(column);

        if(this.columns.length == 1) {
          this.novoNoteDialog();
          this.primeiraNotaSemColuna = false;
        }
      }
    })
  }

  novoNoteDialog() {

    if(!this.columns.length) {
      this.primeiraNotaSemColuna = true;
      this.novoColumnDialog();
      return;
    }

    const dialogRef = this.dialog.open(NovoNoteDialogComponent, {
      panelClass: "dialog-lg",
      data: {
        columns: this.columns
      }
    });
    dialogRef.afterClosed().subscribe( (note: Note) => {
      console.log(note)
      if(note) {
        const i = this.columns.findIndex(c => c.id == note.coluna?.id);
        if(i !== -1) {
          this.columns[i].notes?.push(note);
        }
      }
    })
  }

}
