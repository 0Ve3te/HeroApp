import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',  redirectTo: '/heroes', pathMatch: 'full'
  },
  {
    path: 'heroes',
    loadChildren: () => import('./pages/heroes/heroes.module').then( m => m.HeroesPageModule)
  },
  {
    path: 'hero/:id',
    loadChildren: () => import('./pages/hero/hero.module').then( m => m.HeroPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'race/:id',
    loadChildren: () => import('./pages/race/race.module').then( m => m.RacePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
