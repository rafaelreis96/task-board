import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES = [
  {path:'', loadChildren: () => import('./board/board.module').then(m => m.BoardModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
