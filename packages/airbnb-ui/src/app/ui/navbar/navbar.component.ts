import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent, SearchComponent, UserMenuComponent } from 'libs/shared/components';

@Component({
  standalone: true,
  imports: [RouterModule, LogoComponent, SearchComponent, UserMenuComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
