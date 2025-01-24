import {  Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { DetailsExamComponent } from './Page/details-exam/details-exam.component';
export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'details',
        component:DetailsExamComponent
    }
];
