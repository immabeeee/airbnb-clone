import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMenuComponent } from './user-menu.component';
import { By } from '@angular/platform-browser';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the avatar container', () => {
    const avatarContainer: HTMLElement = fixture.debugElement.query(
      By.css('lib-avatar[data-test-id="cy-user-menu-user-avatar-container"]'),
    )?.nativeElement;

    expect(avatarContainer).toBeTruthy();
  });

  it('should display the button for adding a new home', () => {
    const button: HTMLElement = fixture.debugElement.query(
      By.css('div[data-test-id="cy-user-menu-add-your-home-button"]'),
    )?.nativeElement;

    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Airbnd your home');
  });

  it('should display the hamburger menu', () => {
    const hamburgerIcon: HTMLElement = fixture.debugElement.query(
      By.css('i[data-test-id="cy-user-menu-hamburger-icon"]'),
    )?.nativeElement;

    expect(hamburgerIcon).toBeTruthy();
    expect(hamburgerIcon.className).toContain('gg-menu-grid-o');
  });
});
