import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsMainRoutingModule } from './gifs-main-routing.module';
import { GifsContainerComponent } from './pages/gifs-container/gifs-container.component';


@NgModule({
  declarations: [GifsContainerComponent],
  imports: [
    CommonModule,
    GifsMainRoutingModule
  ]
})
export class GifsMainModule { }
