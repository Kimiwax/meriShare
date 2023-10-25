import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaCrearGruposPageRoutingModule } from './pantalla-crear-grupos-routing.module';

import { PantallaCrearGruposPage } from './pantalla-crear-grupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaCrearGruposPageRoutingModule
  ],
  declarations: [PantallaCrearGruposPage]
})
export class PantallaCrearGruposPageModule {}
