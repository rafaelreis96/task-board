import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Column } from './../../column/column.model';
import { NoteService } from './../note.service';

export interface DialogData {
  columns: Column[]
}

@Component({
  selector: 'app-novo-note-dialog',
  templateUrl: './novo-note-dialog.component.html',
  styleUrls: ['./novo-note-dialog.component.scss']
})
export class NovoNoteDialogComponent implements OnInit {
  titulo = "Nova Nota";
  formGroup!: FormGroup;
  columns: Column[] = [];

  horaInicio!: FormControl;
  horaTermino!: FormControl;
  regexHoraMinuto = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  constructor(
    private noteService: NoteService,
    private dialogRef: MatDialogRef<NovoNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData ) { }

  ngOnInit(): void {
    this.columns = this.data.columns;
    this.horaInicio = new FormControl("00:00", [Validators.pattern(this.regexHoraMinuto)]);
    this.horaTermino = new FormControl("00:00", [Validators.pattern(this.regexHoraMinuto)]);
    this.formGroup = new FormGroup({
      titulo: new FormControl("", [Validators.required]),
      descricao: new FormControl("", [Validators.required]),
      colunaId: new FormControl("", [Validators.required]),
      periodo: new FormGroup({
        inicio: new FormControl(new Date(), [Validators.required]),
        termino: new FormControl(new Date(), [Validators.required],)
      }),
    });

    this.horaInicio.statusChanges.subscribe( () => this.setHorasPeriodo(this.horaInicio, 'inicio'));
    this.horaTermino.statusChanges.subscribe( () => this.setHorasPeriodo(this.horaTermino, 'termino'));
  }

  private setHorasPeriodo(control: FormControl, periodo: string) : void {
    if(this.regexHoraMinuto.test(control.value)
        && this.formGroup.get('periodo')?.get(periodo)?.valid) {
      const horas = control.value.split(":");
      this.formGroup.get('periodo')?.get(periodo)?.value.setHours(horas[0], horas[1], 0, 0);
    }
  }

  salvar() : void {
    if(this.formGroup.valid) {
      this.noteService.create(this.formGroup.value)
      .then( (note) => {
        this.dialogRef.close(note);
      }).catch( e => {
        alert("Erro: " + e.statusText)
      });
    } else {
      this.dialogRef.close(null);
    }
  }

}
