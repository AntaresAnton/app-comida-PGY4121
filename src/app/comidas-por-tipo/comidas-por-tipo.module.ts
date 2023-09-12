import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidasPorTipoPageRoutingModule } from './comidas-por-tipo-routing.module';

import { ComidasPorTipoPage } from './comidas-por-tipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidasPorTipoPageRoutingModule
  ],
  declarations: [ComidasPorTipoPage]
})
export class ComidasPorTipoPageModule {}
