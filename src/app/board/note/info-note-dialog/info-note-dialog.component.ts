import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Note } from './../note.model';
import { NoteService } from './../note.service';
import { NovoNoteDialogComponent } from './../novo-note-dialog/novo-note-dialog.component';

@Component({
  selector: 'app-info-note-dialog',
  templateUrl: './info-note-dialog.component.html',
  styleUrls: ['./info-note-dialog.component.scss']
})
export class InfoNoteDialogComponent implements OnInit {
  note!: Note;

  constructor(
    private noteService: NoteService,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<InfoNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Note ) { }

  ngOnInit(): void {
    this.note = this.data;
  }

  editarDialog() {
    const dialogRef = this.dialog.open(NovoNoteDialogComponent, {
      panelClass: "dialog-lg",
      data: {
        note: this.note
      }
    });
    dialogRef.afterClosed().subscribe( (note: Note) => {
      this.dialogRef.close(note);
    })
  }

  remover() {
    this.noteService.delete(this.note.id).subscribe({
      next: () => this.dialogRef.close(-1)
    });
  }

}
