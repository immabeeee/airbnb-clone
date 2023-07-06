import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { By } from '@angular/platform-browser';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the avatar', () => {
    const logo: HTMLImageElement = fixture.debugElement.query(
      By.css('img[data-test-id="cy-avatar"]'),
    )?.nativeElement;

    expect(logo).toBeTruthy();
    expect(logo.src).toContain('assets/placeholder.jpg');
    expect(logo.alt).toContain('avatar');
  });
});
