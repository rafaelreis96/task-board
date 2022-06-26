import { MatDialog } from '@angular/material/dialog';
import { NovoColumnDialogComponent } from './novo-column-dialog/novo-column-dialog.component';
import { Column } from './column.model';
import { Note } from './../note/note.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column!: Column;
  @Output() onDeleted = new EventEmitter<Column>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editarDialog() {
    const dialogRef = this.dialog.open(NovoColumnDialogComponent, {
      panelClass: "dialog-sm",
      data: {
        column: this.column
      }
    });
    dialogRef.afterClosed().subscribe( (column: any) => {
      if(column == -1) {
        this.onDeleted.emit(column);
      } else if(column) {
        this.column = column;
      }
    });
  }

}
