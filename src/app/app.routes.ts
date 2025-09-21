import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Facts } from './pages/facts/facts';
import { FactsList } from './pages/facts-list/facts-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'facts', component: Facts },
  { path: 'facts-list', component: FactsList },
  { path: '**', redirectTo: '' },
];
