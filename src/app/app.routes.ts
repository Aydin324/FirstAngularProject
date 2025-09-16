import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Facts } from './pages/facts/facts';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'facts', component: Facts },
  { path: '**', redirectTo: '' },
];
