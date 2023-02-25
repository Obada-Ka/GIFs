import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsSectionRoutingModule } from './gifs-section-routing.module';
import { GifsComponent } from './gifs.component';


@NgModule({
  declarations: [GifsComponent],
  imports: [
    CommonModule,
    GifsSectionRoutingModule
  ]
})
export class GifsSectionModule { }
