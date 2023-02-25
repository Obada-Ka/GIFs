import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/gifs-section/gifs-section.module').then(
            (m) => m.GifsSectionModule
          ),
      },
      {
        path: 'static',
        loadChildren: () =>
          import('./pages/static/static.module').then((m) => m.StaticModule),
      },
    ],
  },
  {
    path: '**', // if the path did not match any route, then page 404 will be displayed.
    pathMatch: 'full',
    redirectTo: '/static/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
