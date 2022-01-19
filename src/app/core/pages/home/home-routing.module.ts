import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import(
        './../../../module/actionSheet/pages/action-sheet/action-sheet.module'
      ).then((m) => m.ActionSheetPageModule),
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./../../../module/alert/pages/alert/alert.module').then(
        (m) => m.AlertPageModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./../../../module/avatar/pages/avatar/avatar.module').then(
        (m) => m.AvatarPageModule
      ),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./../../../module/button/pages/button/button.module').then(
        (m) => m.ButtonPageModule
      ),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./../../../module/card/pages/card/card.module').then(
        (m) => m.CardPageModule
      ),
  },
  {
    path: 'check-box',
    loadChildren: () =>
      import(
        './../../../module/checkBox/pages/check-box/check-box.module'
      ).then((m) => m.CheckBoxPageModule),
  },
  {
    path: 'date-time',
    loadChildren: () =>
      import(
        './../../../module/DateTime/pages/date-time/date-time.module'
      ).then((m) => m.DateTimePageModule),
  },
  {
    path: 'fab',
    loadChildren: () =>
      import('./../../../module/fab/pages/fab/fab.module').then(
        (m) => m.FabPageModule
      ),
  },
  {
    path: 'grid-row-col',
    loadChildren: () =>
      import(
        './../../../module/GridRowCol/pages/grid-row-col/grid-row-col.module'
      ).then((m) => m.GridRowColPageModule),
  },
  {
    path: 'infinite-scroll',
    loadChildren: () =>
      import(
        './../../../module/InfiniteScroll/pages/infinite-scroll/infinite-scroll.module'
      ).then((m) => m.InfiniteScrollPageModule),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./../../../module/Input/pages/input/input.module').then(
        (m) => m.InputPageModule
      ),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./../../../module/List/pages/list/list.module').then(
        (m) => m.ListPageModule
      ),
  },
  {
    path: 'item-sliding',
    loadChildren: () =>
      import(
        './../../../module/ItemSliding/pages/item-sliding/item-sliding.module'
      ).then((m) => m.ItemSlidingPageModule),
  },
  {
    path: 'list-reorder',
    loadChildren: () =>
      import(
        './../../../module/listReorder/pages/list-reorder/list-reorder.module'
      ).then((m) => m.ListReorderPageModule),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./../../../module/loading/pages/loading/loading.module').then(
        (m) => m.LoadingPageModule
      ),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./../../../module/modal/pages/modal/modal.module').then(
        (m) => m.ModalPageModule
      ),
  },
  {
    path: 'pop-over',
    loadChildren: () =>
      import('./../../../module/popOver/pages/pop-over/pop-over.module').then(
        (m) => m.PopOverPageModule
      ),
  },
  {
    path: 'progress-bar-and-range',
    loadChildren: () =>
      import(
        './../../../module/ProgressBarAndRange/pages/progress-bar-and-range/progress-bar-and-range.module'
      ).then((m) => m.ProgressBarAndRangePageModule),
  },
  {
    path: 'refresh',
    loadChildren: () =>
      import('./../../../module/refresh/pages/refresh/refresh.module').then(
        (m) => m.RefreshPageModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./../../../module/search/pages/search/search.module').then(
        (m) => m.SearchPageModule
      ),
  },
  {
    path: 'segment',
    loadChildren: () =>
      import('./../../../module/segment/pages/segment/segment.module').then(
        (m) => m.SegmentPageModule
      ),
  },
  {
    path: 'skelenton-text',
    loadChildren: () =>
      import(
        './../../../module/skeletonText/page/skelenton-text/skelenton-text.module'
      ).then((m) => m.SkelentonTextPageModule),
  },
  {
    path: 'slides',
    loadChildren: () =>
      import('./../../../module/slides/pages/slides/slides.module').then(
        (m) => m.SlidesPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./../../../module/tabs/pages/tabs/tabs.module').then(
        (m) => m.TabsPageModule
      ),
  },
  {
    path: 'toast',
    loadChildren: () =>
      import('./../../../module/toast/pages/toast/toast.module').then(
        (m) => m.ToastPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
