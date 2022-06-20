import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Note } from './note.model';
import { InfoNoteDialogComponent } from './info-note-dialog/info-note-dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input()
  note!: Note;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  exibirDialog(note: Note) {
    const dialogRef = this.dialog.open(InfoNoteDialogComponent, {
      panelClass: "dialog-lg",
      data: note,
    });

  }
}
