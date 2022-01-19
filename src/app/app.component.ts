import { Components } from './core/models/components';
import { DataMenuService } from './core/services/data-menu.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuOptions: Observable<Components[]>;
  constructor(
    private platform: Platform,
    private dataMenuService: DataMenuService
  ) {
    this.inicializeApp();
  }

  inicializeApp() {
    this.platform.ready().then(() => {
      this.menuOptions = this.dataMenuService.getMenuOptions();
    });
  }
}
