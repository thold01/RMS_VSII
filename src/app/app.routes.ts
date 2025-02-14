import { Routes } from '@angular/router';
import { ChooseExamComponent } from './pages/ky-thi/ky-thi.component';
import { ChiTietKyThiComponent } from './pages/chi-tiet-ky-thi/chi-tiet-ky-thi.component';
import { ThiSinhGioiThieuBanThanComponent } from './pages/thi-sinh-gioi-thieu-ban-than/thi-sinh-gioi-thieu-ban-than.component';

export const routes: Routes = [
  { path: '', component: ChooseExamComponent },
  { path: 'detail/:id', component: ChiTietKyThiComponent },
  { path: 'introduce', component: ThiSinhGioiThieuBanThanComponent },
  // { path: '**', component: PageNotFoundComponent },
];
