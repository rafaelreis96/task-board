import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Column } from './../../column/column.model';

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
  columns!: Column[];

  horaInicio!: FormControl;
  horaTermino!: FormControl;
  regexHoraMinuto = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  constructor(
    private dialogRef: MatDialogRef<NovoNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData) { }

  ngOnInit(): void {
    this.columns = this.data.columns;

    this.horaInicio = new FormControl("00:00");
    this.horaTermino = new FormControl("00:00");
    this.formGroup = new FormGroup({
      titulo: new FormControl("", [Validators.required]),
      descricao: new FormControl("", [Validators.required]),
      coluna: new FormControl("", [Validators.required]),
      datas: new FormGroup({
        inicio: new FormControl(null, [Validators.required]),
        termino: new FormControl(null, [Validators.required])
      }),
    });


  }

  salvar() : void {
    if(this.formGroup.valid) {
      this.ajustarDatasComHorarios();
      this.dialogRef.close(this.formGroup.value);
    } else {
      this.dialogRef.close(null);
    }
  }

  private ajustarDatasComHorarios() : void {
    const dataInicio: Date = this.formGroup.get('datas')?.get('inicio')?.value;
    const dataTermino: Date = this.formGroup.get('datas')?.get('termino')?.value;

    if(this.regexHoraMinuto.test(this.horaInicio.value)) {
      const horas = this.horaInicio.value.split(":");
      dataInicio.setHours(horas[0], horas[1], 0, 0);
      this.formGroup.get('datas')?.get('inicio')?.setValue(dataInicio);
    }

    if(this.regexHoraMinuto.test(this.horaTermino.value)) {
      const horas = this.horaTermino.value.split(":");
      dataTermino.setHours(horas[0], horas[1], 0, 0);
      this.formGroup.get('datas')?.get('termino')?.setValue(dataTermino);
    }
  }

}
