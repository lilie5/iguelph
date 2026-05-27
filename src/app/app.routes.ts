import { Routes } from '@angular/router';
import { About } from './pages/team/team';
import { Projects } from './pages/projects/projects';
import { Sponsors } from './pages/sponsors/sponsors';
import { Recruitment } from './pages/recruitment/recruitment';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'sponsors', component: Sponsors },
  { path: 'recruitment', component: Recruitment },
  { path: 'contact', component: Contact }
];
