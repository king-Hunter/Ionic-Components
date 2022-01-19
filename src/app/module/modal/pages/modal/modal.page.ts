import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        value: 123,
        user: 'Admin',
        name: 'Juan',
      },
    });

    await modal.present();
    const { data } = await modal.onWillDismiss(); // Se dispara inmediatamente antes de que se cierre la animacion
    // const { data } = await modal.onDidDismiss(); // Se dispara despues de que inicia la animacion
    console.log(data);
  }
}
