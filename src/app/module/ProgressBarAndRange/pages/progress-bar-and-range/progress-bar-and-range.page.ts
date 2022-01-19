import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-and-range',
  templateUrl: './progress-bar-and-range.page.html',
  styleUrls: ['./progress-bar-and-range.page.scss'],
})
export class ProgressBarAndRangePage implements OnInit {
  porcentaje: number;
  constructor() {}

  ngOnInit() {
    this.porcentaje = 0.0;
  }

  rangeChanges(event: any) {
    this.porcentaje = event.detail.value / 100;
  }

  public customFormatter(value: number) {
    return `${value}%`
  }
}
