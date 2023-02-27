import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Giphy } from 'src/app/models/giphy';
import { GifsFavoriteComponent } from '../../components/gifs-favorite/gifs-favorite.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-container',
  templateUrl: './gifs-container.component.html',
  styleUrls: ['./gifs-container.component.scss']
})
export class GifsContainerComponent implements OnInit {
  gifs$: BehaviorSubject<Giphy[]> = new BehaviorSubject<Giphy[]>([]);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  searchQuery = '';

  constructor(private gifService: GifsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadGifs();
  }

  /**
   * This is a Javadoc comment for a method that provide new gifs for the stream of gifs.
   * @param currentGifs the current loadaed
   * @param gifs$ the stream of gifs being viewed
   * @next concate new gifs to the current stream of gifs
   */
  loadGifs(resetOffset = false): void {
    this.isLoading$.next(true);
    let gifsObservable: Observable<Giphy[]>;
    gifsObservable = this.gifService.searchGifs(this.searchQuery, resetOffset);
    gifsObservable.subscribe(
      // to handle new values coming from http req
      gifs => {
        const currentGifs = this.gifs$.value;
        // concate old values with new ones to add new values for the data stream
        this.gifs$.next([...currentGifs, ...gifs]);
        this.isLoading$.next(false);
      },
      error => {
        this.isLoading$.next(false);
      }
    );
  }

  onScroll(): void {
    this.loadGifs(false);
  }

  onSearch($event): void {
    this.searchQuery = $event.value;
    this.gifs$.next([]);
    this.loadGifs($event.resetGifs);
  }

  isFavorite($event: Giphy): void {
    this.gifService.toggleFavoriteGif($event);
  }
  /**
   * This is a Javadoc comment for a method that open a dialog to show favorite GIFs.
   * @param dialogRef Dialog to be shown
   * @param res received GIFs which are considered as Favorite
   * @param GifsFavoriteComponent call GIFsFavoriteComponent that manage the Dialog
   */

  viewFavorites(): void {
    this.gifService.getFavoriteGifs().subscribe((res) => {
      const dialogRef = this.dialog.open(GifsFavoriteComponent, {
        panelClass: 'favorite-dialog',
        width: '100%',
        data: res
      });
    });
  }

}
