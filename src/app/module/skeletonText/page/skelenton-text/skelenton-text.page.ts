import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skelenton-text',
  templateUrl: './skelenton-text.page.html',
  styleUrls: ['./skelenton-text.page.scss'],
})
export class SkelentonTextPage implements OnInit {
  data: any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        heading: 'Normal text',
        para1: 'Lorem ipsum dolor sit amet, consectetur',
        para2: 'adipiscing elit.',
      };
    }, 5000);
  }

  ngOnInit() {}
}
