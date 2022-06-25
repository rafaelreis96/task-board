import { Note } from './../note.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Column } from './../../column/column.model';
import { NoteService } from './../note.service';
import { ColumnService } from '@app/board/column/column.service';

export interface DATA_DIALOG {
  column?: Column,
  note?: Note
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
    private columnService: ColumnService,
    private noteService: NoteService,
    private dialogRef: MatDialogRef<NovoNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DATA_DIALOG ) { }

  ngOnInit(): void {
    this.columnService.findAll().subscribe({
      next: (columns: Column[]) => this.columns = columns
    });

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

    if(this.data['note']) {
      this.titulo = "Editar Nota";
      this.setValuesForm(this.data.note);
    }

    if(this.data['column']) {
      this.formGroup.get('colunaId')?.setValue(this.data.column.id);
      this.formGroup.get('colunaId')?.disable();
    }

  }

  private setValuesForm(note: Note) {
    this.formGroup.patchValue({
      titulo: note.titulo,
      descricao: note.descricao,
      colunaId: note.colunaId
    });

    const resolveTime = (valor: string) => valor.length == 1 ? '0'+valor : valor;

    if(note.periodo['inicio']) {
      const horaInicio = new Date(note.periodo.inicio);
      this.horaInicio.setValue(
        resolveTime(horaInicio.getHours().toString())
        + ":" + resolveTime(horaInicio.getMinutes().toString()));
    }

    if(note.periodo['termino']) {
      const horaTermino = new Date(note.periodo.termino);
      this.horaTermino.setValue(
        resolveTime(horaTermino.getHours().toString())
        + ":" + resolveTime(horaTermino.getMinutes().toString()));
    }
  }

  private setHorasPeriodo(control: FormControl, periodo: string) : void {
    if(this.regexHoraMinuto.test(control.value)
        && this.formGroup.get('periodo')?.get(periodo)?.valid) {
      const horas = control.value.split(":");
      this.formGroup.get('periodo')?.get(periodo)?.value
                    .setHours(horas[0], horas[1], 0, 0);
    }
  }

  salvar() : void {
    if(this.formGroup.valid) {
      this.formGroup.disable();

      if(this.hasEdit()) {
        this.noteService.update(this.data.note?.id || 0, this.formGroup.value)
        .subscribe({
          next: (note: Note) => this.dialogRef.close(note),
          complete: () => this.formGroup.enable()
        });
      } else {
        this.noteService.create(this.formGroup.value)
        .subscribe({
          next: (note: Note) => this.dialogRef.close(note),
          complete: () => this.formGroup.enable()
        });
      }
    } else {
      this.dialogRef.close(null);
    }
  }

  hasEdit() {
    return this.data != null && this.data['note'];
  }

}
