import { CommunComponentsModule } from './../../../../core/module/commun-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarAndRangePageRoutingModule } from './progress-bar-and-range-routing.module';

import { ProgressBarAndRangePage } from './progress-bar-and-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarAndRangePageRoutingModule,
    CommunComponentsModule
  ],
  declarations: [ProgressBarAndRangePage]
})
export class ProgressBarAndRangePageModule {}
