import { Routes } from '@angular/router';
import { ChooseExamComponent } from './pages/ky-thi/ky-thi.component';
import { ChiTietKyThiComponent } from './pages/chi-tiet-ky-thi/chi-tiet-ky-thi.component';

export const routes: Routes = [
  { path: '', component: ChooseExamComponent },
  { path: 'detail', component: ChiTietKyThiComponent },
  // { path: '**', component: PageNotFoundComponent },
];
