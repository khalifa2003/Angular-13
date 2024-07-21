import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css'],
})
export class UserSideBarComponent {
  constructor(private AuthService: AuthService) {}
  logout() {
    this.AuthService.logout();
  }
}
