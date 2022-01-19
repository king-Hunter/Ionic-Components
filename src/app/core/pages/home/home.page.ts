import { DataMenuService } from './../../services/data-menu.service';
import { Components } from './../../models/components';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public componentes: Observable<Components[]>;
  constructor(
    private menuController: MenuController,
    private dataMenu: DataMenuService
  ) {}

  ngOnInit() {
    console.log('Holaaa');
    this.componentes = this.dataMenu.getMenuOptions();
  }

  showMenu() {
    this.menuController.open('first');
  }
}
