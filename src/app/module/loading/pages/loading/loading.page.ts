import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  public loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) {}

  ngOnInit() {}
  activeLoading() {
    this.presentLoading('Active Loading');
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message
    });
    this.loading.present();
  }
}
