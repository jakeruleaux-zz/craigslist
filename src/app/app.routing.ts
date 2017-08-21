import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FreeComponent } from './free/free.component';
import { JobsComponent } from './jobs/jobs.component';
import { AptsComponent } from './apts/apts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
   path: 'free',
   component: FreeComponent
 },
 {
   path: 'jobs',
   component: JobsComponent
 },
 {
   path: 'apts',
   component: AptsComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
