import { PopOverInfoComponent } from './../../components/pop-over-info/pop-over-info.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverInfoComponent,
      event: ev,
      translucent: false,
      backdropDismiss: false,
    });

    await popover.present();
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }
}
