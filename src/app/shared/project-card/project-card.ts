import { Component, input } from '@angular/core';
import { Project } from '../../data/portfolio.models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  /** Small line shown under the title (e.g. role, engine). */
  readonly subtitle = input<string>();
}
