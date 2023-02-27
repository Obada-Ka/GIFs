import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Giphy } from 'src/app/models/giphy';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrls: ['./gif-grid.component.scss'],
})
export class GifGridComponent implements OnInit {
  @Input() gifsStream$: Observable<Giphy[]>;
  @Output() scrolled = new EventEmitter();
  @Output() isFavorite = new EventEmitter();
  isExpaned = false;
  constructor() {}

  ngOnInit(): void {

  }

  onScroll(): void {
    this.scrolled.emit(true);
  }

  toggleFavorite(gif: Giphy) {
    gif.isFavorite = !gif.isFavorite;
    this.isFavorite.emit(gif);
  }

  handleGifLoading(gif, $event): void {
    gif.isLoading = $event;
  }
}
