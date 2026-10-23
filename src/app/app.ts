import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PROFILE } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();

  protected readonly tabs = [
    { path: '/biography', label: 'Biography' },
    { path: '/music', label: 'Musical Projects' },
    { path: '/games', label: 'Developed Games' },
    { path: '/apps', label: 'Web Apps' },
  ];
}
