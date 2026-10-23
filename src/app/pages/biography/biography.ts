import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.html',
  styleUrl: './biography.scss',
})
export class Biography {
  protected readonly profile = PROFILE;
}
