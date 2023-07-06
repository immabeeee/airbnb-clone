import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'lib-user-menu',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {}
