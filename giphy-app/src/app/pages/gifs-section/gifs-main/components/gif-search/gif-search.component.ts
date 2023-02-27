import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent implements OnInit {
  @Output() searchQuery = new EventEmitter();
  @Output() viewFavorites = new EventEmitter();
  querySearch = '';
  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchQuery.emit({value: this.querySearch, resetGifs: true});
  }

  removeSearch(): void {
    this.querySearch = '';
    this.search();
  }

  myFavorites(): void {
    this.viewFavorites.emit(true);
  }

}
