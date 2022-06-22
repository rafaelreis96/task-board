import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { ButtonNovoComponent } from './components/button-novo/button-novo.component';
import { ButtonNovoStrokedComponent } from './components/button-novo-stroked/button-novo-stroked.component';
import { ButtonSalvarComponent } from './components/button-salvar/button-salvar.component';
import { ButtonDescartarComponent } from './components/button-descartar/button-descartar.component';
import { MatNativeDateModule } from '@angular/material/core';

const MY_COMPONENTES = [
  ButtonNovoComponent,
  ButtonNovoStrokedComponent,
  ButtonSalvarComponent,
  ButtonDescartarComponent
];

const ANGULAR_MATERIAL = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  declarations: [
    MY_COMPONENTES,
    ButtonNovoStrokedComponent,
    ButtonSalvarComponent,
    ButtonDescartarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ANGULAR_MATERIAL
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ANGULAR_MATERIAL,
    MY_COMPONENTES,
  ]
})
export class SharedModule { }
