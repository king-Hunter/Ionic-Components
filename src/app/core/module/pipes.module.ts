import { FilterHeroPipe } from './../../module/segment/pipe/filter-hero.pipe';
import { FilterPipe } from './../../module/search/pipes/filter-pipe.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FilterPipe, FilterHeroPipe],
  exports: [FilterPipe, FilterHeroPipe],
})
export class PipesModule {}
