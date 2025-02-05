import { Routes } from '@angular/router';
import { ChooseExamComponent } from './pages/ky-thi/ky-thi.component';
import { ChiTietKyThiComponent } from './pages/chi-tiet-ky-thi/chi-tiet-ky-thi.component';
import { NoDataComponent } from './pages/no-data/no-data.component';

export const routes: Routes = [
  { path: '', component: ChooseExamComponent },
  { path: 'detail', component: ChiTietKyThiComponent },
  { path: 'no-data', component: NoDataComponent },
  // { path: '**', component: PageNotFoundComponent },
];
