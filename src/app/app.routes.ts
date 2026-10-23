import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'biography' },
  {
    path: 'biography',
    title: 'Biography',
    loadComponent: () => import('./pages/biography/biography').then((m) => m.Biography),
  },
  {
    path: 'music',
    title: 'Musical Projects',
    loadComponent: () =>
      import('./pages/musical-projects/musical-projects').then((m) => m.MusicalProjects),
  },
  {
    path: 'games',
    title: 'Developed Games',
    loadComponent: () => import('./pages/games/games').then((m) => m.Games),
  },
  { path: '**', redirectTo: 'biography' },
];
