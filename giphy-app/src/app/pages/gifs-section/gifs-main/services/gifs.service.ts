import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';
import { GiphyApiResponse } from 'src/app/models/gifApiResponse';
import { map } from 'rxjs/operators';
import { Giphy } from 'src/app/models/giphy';
@Injectable()
export class GifsService {

  private offset = 0;
  private limit = 10;

  private gifsSubject = new BehaviorSubject<Giphy[]>([]);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();
  gifs$ = this.gifsSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  /**
   * This is a Javadoc comment for a method that provide new gifs for the stream of gifs.
   * @param offset the current offset
   * @param AppConfig get end points url
   * @param options options for the endPoint like querySearch name and api_key
   * @GiphyApiResponse GiphyApiResponse is an interface used to get data directly from the response.
   * @Giphy Giphy is a class to get specific properties from the extracted Data.
   * @Observable Observable is used to ensure that the method will return a stream of data.
   */

  searchGifs(query: string = '', resetOffset = false): Observable<Giphy[]> {
    const url = query ? AppConfig.endPoints.searchGifs : AppConfig.endPoints.getGifs;
    this.offset = resetOffset ? 0 : this.offset + this.limit;
    const options: any = {
      api_key: AppConfig.apiKey,
      q: query,
      limit: this.limit,
      offset: this.offset
    };
    return this.httpClient.get<GiphyApiResponse>(url, {params: options, responseType: 'json'}).pipe(
      map((response) => {
        return response.data.map((gif) => new Giphy(gif));
      }),
    );
  }

  /**
   * This is a Javadoc comment for a method that manage Favorite GIFs inserting and deleting.
   * @param favorites array of Favorite GIFs that will stored in LoaclStorage.
   */

  toggleFavoriteGif(gif: Giphy) {

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex((fav: string) => fav === gif.id);
    if (gif.isFavorite && index === -1) {
      favorites.push(gif.id);
    } else if (!gif.isFavorite && index !== -1) {
      favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  /**
   * This is a Javadoc comment for a method that get GIFs by IDs.
   * @param gifsIds array of Favorite GIFs Ids that are stored in LocalStorage property (favorites).
   * @prepareGifsIds prepareGifsIds is a method to get Favorite GIFs IDs.
   */

  getFavoriteGifs(): Observable<Giphy[]> {
    const gifsIds = this.prepareGifsIds();
    if (!gifsIds.length) {
      return of([]);
    }
    const options: any = {
      api_key: AppConfig.apiKey,
      ids: gifsIds,
    };
    return this.httpClient.get<GiphyApiResponse>(AppConfig.endPoints.getGifsByIds, {params: options, responseType: 'json'}).pipe(
      map((response) => {
        return response.data.map((gif) => new Giphy(gif));
      }),
    );
  }

  prepareGifsIds(): string {
    return JSON.parse(localStorage.getItem('favorites') || '[]').join(',');
  }

}
