import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GifsMainRoutingModule } from './gifs-main-routing.module';
import { GifsContainerComponent } from './pages/gifs-container/gifs-container.component';
import { GifsService } from './services/gifs.service';
import { GifGridComponent } from './components/gif-grid/gif-grid.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { GifsFavoriteComponent } from './components/gifs-favorite/gifs-favorite.component';

@NgModule({
  declarations: [
    GifsContainerComponent,
    GifGridComponent,
    GifCardComponent,
    GifSearchComponent,
    GifsFavoriteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    InfiniteScrollModule,
    GifsMainRoutingModule,
  ],
  providers: [GifsService],
})
export class GifsMainModule {}
