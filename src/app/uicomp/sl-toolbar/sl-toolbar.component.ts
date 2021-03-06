import { Component, OnInit } from '@angular/core';
import { UIService } from '../../service/uiservice.service';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../service/authentication.service';
import { AuthStore } from '../../stores/auth.store';

@Component({
  selector: 'app-sl-toolbar',
  templateUrl: './sl-toolbar.component.html',
  styleUrls: ['./sl-toolbar.component.css']
})
export class SlToolbarComponent implements OnInit {
  navBarShow = false;
  username: string;

  // isLoggedIn$: Observable<boolean>;
  isLoggedIn$ = true;

  constructor(
    private uiService: UIService,
    private authService: AuthenticationService,
    private authStore: AuthStore) {}

  emitNavBarEvent(): void {
    this.navBarShow = !this.navBarShow;
    this.uiService.announceNavBarEvent(this.navBarShow);
  }

  ngOnInit() {
    this.username = this.authStore.getUsernameFromStorage();
  }

  onLogout() {
    this.authService.logout();
  }
}
