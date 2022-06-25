import { InfoNoteDialogComponent } from './note/info-note-dialog/info-note-dialog.component';
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

    this.columnService.findAll()
    .subscribe({
      next: (columns) => {
        if(columns)
          this.columns = columns;
      }
    })

  }

  novoColumnDialog() {
    const dialogRef = this.dialog.open(NovoColumnDialogComponent, {
      panelClass: "dialog-sm",
    });
    dialogRef.afterClosed().subscribe( (column: Column) => {
      if(column) {
        this.columns.push(column);

        if(this.columns.length == 1) {
          this.novoNoteDialog();
          this.primeiraNotaSemColuna = false;
        }
      }
    })
  }

  novoNoteDialog(column?: Column) {
    if(!this.columns.length) {
      this.primeiraNotaSemColuna = true;
      this.novoColumnDialog();
      return;
    }

    const dialogRef = this.dialog.open(NovoNoteDialogComponent, {
      panelClass: "dialog-lg",
      data: {
        column: column
      }
    });
    dialogRef.afterClosed().subscribe( (note: Note) => {
      if(note) {
        const i = this.columns.findIndex(c => c.id == note.colunaId);
        if(i !== -1) {
          this.columns[i].notas?.push(note);
        }
      }
    });
  }

  exibirDialog(note: Note) {
    const dialogRef = this.dialog.open(InfoNoteDialogComponent, {
      panelClass: "dialog-lg",
      data: note,
    });
    dialogRef.afterClosed().subscribe( (result: any) => {
      const index = this.columns.findIndex(c => c.id === note.colunaId);
      if(result == -1) {
        this.columns[index]
            .notas.splice(this.columns[index].notas.indexOf(note), 1);
      } else if(result['id']) {
        this.columns[index]
            .notas[this.columns[index].notas.indexOf(note)] = result;
      }
    });

  }

  addNoteToColumn(column: Column) {
    this.novoNoteDialog(column)
  }

}
