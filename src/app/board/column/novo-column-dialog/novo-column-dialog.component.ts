import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Column } from './../column.model';
import { ColumnService } from '../column.service';

export interface DATA_DIALOG {
  column?: Column
}

@Component({
  selector: 'app-novo-column-dialog',
  templateUrl: './novo-column-dialog.component.html',
  styleUrls: ['./novo-column-dialog.component.scss']
})
export class NovoColumnDialogComponent implements OnInit {
  titulo = "Nova Coluna";
  formGroup!: FormGroup;

  constructor(
    private columnService: ColumnService,
    private dialogRef: MatDialogRef<NovoColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DATA_DIALOG ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      titulo: new FormControl("", [Validators.required])
    });

    if(this.data && this.data['column']) {
      this.titulo = "Editar Coluna";
      this.setValuesForm(this.data.column);
    }
  }

  private setValuesForm(column: Column) {
    this.formGroup.patchValue({
      titulo: column.titulo
    });
  }

  salvar() : void {
    if(this.formGroup.invalid) {
      return;
    }

    this.formGroup.disable();
    this.columnService.create(this.formGroup.value)
    .subscribe({
      next:(column: Column) => {
        this.dialogRef.close(column);
      },
      complete: () => {
        this.formGroup.enable();
      }
    });
  }

  excluir() {
    this.columnService.delete(this.data.column?.id || 0)
    .subscribe({
      next: () => this.dialogRef.close(-1),
    });
  }

  hasEdit() {
    return this.data != null && this.data['column'];
  }

}
