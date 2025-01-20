import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';
import Example from './taiga-ui-example/taiga-ui-example.component';
import { ErrorPageComponent } from './pages/not-found/not-found.component';
import { LoginPageComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TuiRoot, Example, ErrorPageComponent, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecruitmentManagementSystem';
}
