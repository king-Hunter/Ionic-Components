import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);
  constructor() {}

  ngOnInit() {}
  loadData() {
    if (this.data.length > 30) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    setTimeout(() => {
      const newArray = Array(20);
      this.data.push(...newArray);
      this.infiniteScroll.complete();
    }, 1500);
  }
}
