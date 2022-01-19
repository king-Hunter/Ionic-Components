import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
public favorite: boolean;
  constructor() { }

  ngOnInit() {
  }
  public onClick(){
    this.favorite = !this.favorite;
  }
}
