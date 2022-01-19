import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  public persons: String[] = ['Iron Man', 'Thor', 'Odin', 'Capitan', 'Hulk'];
  public reorder: boolean = false;
  constructor() {}

  ngOnInit() {}
  doReorder(event: any) {
    console.log(event);
    event.detail.complete();
    const itemMove = this.persons.splice(event.detail.from, 1)[0];
    this.persons.splice(event.detail.to, 0, itemMove);
    console.log(this.persons);
  }
  activeReorder() {
    this.reorder = !this.reorder;
  }
}
