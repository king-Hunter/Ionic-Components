import { DataService } from '../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  public users: Observable<any>;

  constructor(private dataUserService: DataService) {}

  ngOnInit() {
    this.users = this.dataUserService.getUsers();
  }
  public favorite(item: any) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }
  public share(item: any) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }
  public delete(item: any) {
    console.log(item);
    this.ionList.closeSlidingItems();
  }
}
