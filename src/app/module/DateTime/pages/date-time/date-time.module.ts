import { CommunComponentsModule } from './../../../../core/module/commun-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimePageRoutingModule } from './date-time-routing.module';

import { DateTimePage } from './date-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimePageRoutingModule,
    CommunComponentsModule
  ],
  declarations: [DateTimePage]
})
export class DateTimePageModule {}
