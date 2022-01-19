import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit() {}
  activeToast() {
    this.toastService.presentToast();
  }
  activeToastWithOptions() {
    this.toastService.presentToastWithOptions();
  }
}
