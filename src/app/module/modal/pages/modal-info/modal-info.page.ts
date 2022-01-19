import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() public value: number;
  @Input() public user: string;
  @Input() public name: string;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  closeModal() {
    this.modalController.dismiss();
  }
  close() {
    this.modalController.dismiss({
      name: 'Juanes',
      user: 'Proveedor',
    });
  }
}
