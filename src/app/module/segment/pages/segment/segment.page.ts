import { Hero } from './../../models/hero';
import { DataHerosService } from './../../services/data-heros.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  public heros: Observable<Hero[]>;
  public selected: string;
  constructor(private dataHeroService: DataHerosService) {}

  ngOnInit() {
    this.heros = this.dataHeroService.getHerosOptions();
  }

  segmentChanged(ev: any) {
    this.selected = ev.detail.value;
    console.log('Segment changed to', ev.detail.value);
  }
}
