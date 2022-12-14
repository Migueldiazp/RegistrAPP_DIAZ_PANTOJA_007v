import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriadosAPIPageRoutingModule } from './feriados-api-routing.module';

import { FeriadosAPIPage } from './feriados-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriadosAPIPageRoutingModule
  ],
  declarations: [FeriadosAPIPage]
})
export class FeriadosAPIPageModule {}
