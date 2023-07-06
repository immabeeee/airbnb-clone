import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    })
      .overrideComponent(SearchComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display 3 buttons and the search icon button', () => {
    const anywhere: HTMLElement = fixture.debugElement.query(
      By.css('div[data-test-id="cy-search-item-anywhere"]'),
    )?.nativeElement;
    const anyweek: HTMLElement = fixture.debugElement.query(
      By.css('div[data-test-id="cy-search-item-anyweek"]'),
    )?.nativeElement;
    const addGuests: HTMLElement = fixture.debugElement.query(
      By.css('div[data-test-id="cy-search-item-add-guests"]'),
    )?.nativeElement;
    const searchIcon: HTMLElement = fixture.debugElement.query(
      By.css('i[data-test-id="cy-search-search-icon"]'),
    )?.nativeElement;

    expect(anywhere).toBeTruthy();
    expect(anywhere.textContent).toContain('Anywhere');

    expect(anyweek).toBeTruthy();
    expect(anyweek.textContent).toContain('Any Week');

    expect(addGuests).toBeTruthy();
    expect(addGuests.textContent).toContain('Add Guests');

    expect(searchIcon).toBeTruthy();
    expect(searchIcon.className).toContain('gg-search');
  });
});
