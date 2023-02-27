export class Giphy {
  id: string;
  title: string;
  imageUrl: string;
  rating: string;
  username: string;
  createDateTime: string;
  updateDateTime: string;
  images: object;
  isFavorite: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.imageUrl = data.images.original.url;
    this.rating = data.rating;
    this.username = data.username;
    this.createDateTime = data.import_datetime;
    this.updateDateTime = data.trending_datetime;
    this.images = Object.assign({}, data.images);
    this.isFavorite = false;
  }
}
