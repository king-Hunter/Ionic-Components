import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarAndRangePage } from './progress-bar-and-range.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarAndRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarAndRangePageRoutingModule {}
