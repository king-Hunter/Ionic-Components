import { Components } from './../models/components';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataMenuService {
  constructor(private http: HttpClient) {}

  public getMenuOptions() {
    return this.http.get<Components[]>('/assets/data/menu-options.json');
  }
}
