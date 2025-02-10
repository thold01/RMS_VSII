import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TuiIcon, TuiRoot } from '@taiga-ui/core';
import { ErrorPageComponent } from './pages/not-found/not-found.component';
import { LoginPageComponent } from './pages/login/login.component';
import FiltersComponent from './layouts/filters/filters.component';
import TableComponent from './components/table/table.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TuiRoot,
    FiltersComponent,
    TableComponent,
    TuiIcon,
    MenuComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecruitmentManagementSystem';
}
