import { Component } from '@angular/core';
import { MUSICAL_PROJECTS } from '../../data/portfolio.data';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-musical-projects',
  imports: [ProjectCard],
  templateUrl: './musical-projects.html',
})
export class MusicalProjects {
  protected readonly projects = MUSICAL_PROJECTS;
}
