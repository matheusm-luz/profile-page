import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EXPERIENCES, PROFILE, PROJECTS } from './data/portfolio.data';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the name in the h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(PROFILE.name);
  });

  it('should render every experience', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.job').length).toBe(EXPERIENCES.length);
  });

  it('should mark projects as under construction with roadmap progress', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.project').length).toBe(PROJECTS.length);
    expect(compiled.querySelectorAll('.wip').length).toBe(PROJECTS.length);
    expect(compiled.querySelector('.roadmap__head')?.textContent).toContain('0 de 4 etapas');
  });
});
