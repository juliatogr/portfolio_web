import { Component } from '@angular/core';
import { GAMES } from '../../data/portfolio.data';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-games',
  imports: [ProjectCard],
  templateUrl: './games.html',
})
export class Games {
  protected readonly games = GAMES;
}
