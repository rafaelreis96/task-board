import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ButtonNovoComponent } from './components/button-novo/button-novo.component';

const MY_COMPONENTES = [
  ButtonNovoComponent
];

const ANGULAR_MATERIAL = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    MY_COMPONENTES
  ],
  imports: [
    CommonModule,
    ANGULAR_MATERIAL
  ],
  exports: [
    ANGULAR_MATERIAL,
    MY_COMPONENTES,
  ]
})
export class SharedModule { }
