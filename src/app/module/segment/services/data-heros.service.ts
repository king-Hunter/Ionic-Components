import { Hero } from './../models/hero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataHerosService {
  constructor(private http: HttpClient) {}

  public getHerosOptions() {
    return this.http
      .get<Hero[]>('/assets/data/superheroes.json')
      .pipe(delay(1500));
  }
}
