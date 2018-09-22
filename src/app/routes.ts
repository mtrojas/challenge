import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsdComponent } from './usd/usd.component';
import { UfComponent } from './uf/uf.component';
import { TmcComponent } from './tmc/tmc.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usd', component: UsdComponent },
  { path: 'uf', component: UfComponent },
  { path: 'tmc', component: TmcComponent },
  { path: '**', redirectTo: '' }
];