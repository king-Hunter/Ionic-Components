import { CommunComponentsModule } from './../../../../core/module/commun-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkelentonTextPageRoutingModule } from './skelenton-text-routing.module';

import { SkelentonTextPage } from './skelenton-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkelentonTextPageRoutingModule,
    CommunComponentsModule
  ],
  declarations: [SkelentonTextPage]
})
export class SkelentonTextPageModule {}
