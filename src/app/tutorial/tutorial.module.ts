import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';


@NgModule({
  declarations: [
    TutorialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TutorialRoutingModule
  ]
})
export class TutorialModule { }
