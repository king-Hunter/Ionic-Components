import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridRowColPage } from './grid-row-col.page';

const routes: Routes = [
  {
    path: '',
    component: GridRowColPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridRowColPageRoutingModule {}
