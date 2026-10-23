import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render all the tabs', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const tabs = (fixture.nativeElement as HTMLElement).querySelectorAll('.tab');
    expect(Array.from(tabs).map((t) => t.textContent?.trim())).toEqual([
      'Biography',
      'Musical Projects',
      'Developed Games',
      'Web Apps',
    ]);
  });
});
