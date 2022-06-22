import { NoteService } from './../note.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from './../note.model';
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
    this.dialogRef.close()
    const dialogRef = this.dialog.open(NovoNoteDialogComponent, {
      panelClass: "dialog-lg",
      data: this.note
    });
    dialogRef.afterClosed().subscribe( (note: Note) => {

    })
  }

  excluir() {
    this.noteService.delete(this.note.id).subscribe({
      next: () => console.log("Removed")
    });
  }

}
