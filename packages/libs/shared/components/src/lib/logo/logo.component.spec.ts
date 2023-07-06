import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import { By } from '@angular/platform-browser';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo', () => {
    const logo: HTMLImageElement = fixture.debugElement.query(
      By.css('img[data-test-id="cy-logo"]')
    )?.nativeElement;

    expect(logo).toBeTruthy();
    expect(logo.src).toContain('assets/logo.png');
    expect(logo.alt).toContain('logo');
  });
});
