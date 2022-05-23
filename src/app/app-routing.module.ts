import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES = [
  { path:'', loadChildren: () => import('./board/board.module').then(m => m.BoardModule) },
  { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule) },
  { path: 'tutorial', loadChildren: () => import('./tutorial/tutorial.module').then(m => m.TutorialModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
