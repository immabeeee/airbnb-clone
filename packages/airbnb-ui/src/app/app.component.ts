import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'airbnb-ui';
}
