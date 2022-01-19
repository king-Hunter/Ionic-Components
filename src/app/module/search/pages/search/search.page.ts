import { DataAlbumsService } from './../../services/data-albums.service';
import { Album } from './../../models/album';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public albums: Album[];
  public text: string = '';
  constructor(private dataAlbumsService: DataAlbumsService) {}

  ngOnInit() {
    this.dataAlbumsService.getAlbums().subscribe((response) => {
      this.albums = response;
    });
  }
  onSearch(event: any) {
    this.text = event.detail.value;
  }
}
