import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-novo-column-dialog',
  templateUrl: './novo-column-dialog.component.html',
  styleUrls: ['./novo-column-dialog.component.scss']
})
export class NovoColumnDialogComponent implements OnInit {
  titulo = "Nova Coluna";
  formGroup!: FormGroup;

  constructor(private dialogRef: MatDialogRef<NovoColumnDialogComponent>) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      titulo: new FormControl("", [Validators.required])
    });
  }

  salvar() : void {
    if(this.formGroup.valid)
      this.dialogRef.close(this.formGroup.value);
    else
      this.dialogRef.close(null);
  }

}
