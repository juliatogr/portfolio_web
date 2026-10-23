import { Component } from '@angular/core';
import { WEB_APPS } from '../../data/portfolio.data';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-web-apps',
  imports: [ProjectCard],
  templateUrl: './web-apps.html',
})
export class WebApps {
  protected readonly apps = WEB_APPS;
}
