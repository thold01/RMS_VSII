import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';
import { ErrorPageComponent } from './pages/not-found/not-found.component';
import { LoginPageComponent } from './pages/login/login.component';
import FiltersComponent from './components/filters/filters.component';
import TableComponent from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TuiRoot,
    FiltersComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecruitmentManagementSystem';
}
