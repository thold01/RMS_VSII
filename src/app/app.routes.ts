import { Routes } from '@angular/router';
import { ChooseExamComponent } from './pages/ky-thi/ky-thi.component';
import { ChiTietKyThiComponent } from './pages/chi-tiet-ky-thi/chi-tiet-ky-thi.component';
import { ThiSinhGioiThieuBanThanComponent } from './pages/thi-sinh-gioi-thieu-ban-than/thi-sinh-gioi-thieu-ban-than.component';
import { QuanLiCauHoiComponent } from './pages/quan-li-cau-hoi/quan-li-cau-hoi.component';
import { LoginPageComponent } from './pages/login/login.component';
import { ErrorPageComponent } from './pages/not-found/not-found.component';
import { HelloWorldBindingsComponent } from './hello/hello-world-bindings/hello-world-bindings.component';
import { SignalDemoComponent } from './hello/signal-demo/signal-demo.component';

export const routes: Routes = [
  { path: '', component: ChooseExamComponent },
  { path: 'test', component: HelloWorldBindingsComponent },
  { path: 'signal-demo', component: SignalDemoComponent }, // 🎯 Demo Signal tại đây
  { path: 'detail/:id', component: ChiTietKyThiComponent },
  { path: 'introduce', component: ThiSinhGioiThieuBanThanComponent },
  { path: 'manage-question', component: QuanLiCauHoiComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: ErrorPageComponent },
];
