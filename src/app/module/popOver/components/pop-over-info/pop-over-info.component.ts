import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-over-info',
  templateUrl: './pop-over-info.component.html',
  styleUrls: ['./pop-over-info.component.scss'],
})
export class PopOverInfoComponent implements OnInit {
  public dataList = Array(20);
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  onClick(event: any) {
    this.popoverController.dismiss({
      event,
    });
  }
}
