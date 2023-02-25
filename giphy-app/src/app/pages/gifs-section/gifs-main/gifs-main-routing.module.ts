import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsContainerComponent } from './pages/gifs-container/gifs-container.component';


const routes: Routes = [{
  path: '', component: GifsContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsMainRoutingModule { }
