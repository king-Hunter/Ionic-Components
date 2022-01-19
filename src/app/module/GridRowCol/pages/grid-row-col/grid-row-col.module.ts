import { CommunComponentsModule } from './../../../../core/module/commun-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridRowColPageRoutingModule } from './grid-row-col-routing.module';

import { GridRowColPage } from './grid-row-col.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridRowColPageRoutingModule,
    CommunComponentsModule
  ],
  declarations: [GridRowColPage]
})
export class GridRowColPageModule {}
