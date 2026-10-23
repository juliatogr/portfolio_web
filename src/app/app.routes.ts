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
  {
    path: 'apps',
    title: 'Web Apps',
    loadComponent: () => import('./pages/web-apps/web-apps').then((m) => m.WebApps),
  },
  { path: '**', redirectTo: 'biography' },
];
