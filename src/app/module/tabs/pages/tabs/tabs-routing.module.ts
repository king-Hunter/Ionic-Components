import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/account',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('./../../../avatar/pages/avatar/avatar.module').then(
            (m) => m.AvatarPageModule
          ),
      },
      {
        path: 'call',
        loadChildren: () =>
          import(
            './../../../listReorder/pages/list-reorder/list-reorder.module'
          ).then((m) => m.ListReorderPageModule),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import(
            './../../../InfiniteScroll/pages/infinite-scroll/infinite-scroll.module'
          ).then((m) => m.InfiniteScrollPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
