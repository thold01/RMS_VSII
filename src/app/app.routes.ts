import {  Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { WorkComponent } from './Page/work/work.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'work',
        component:WorkComponent
    }
];
