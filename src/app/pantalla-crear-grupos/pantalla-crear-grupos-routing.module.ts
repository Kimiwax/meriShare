import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaCrearGruposPage } from './pantalla-crear-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaCrearGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaCrearGruposPageRoutingModule {}
