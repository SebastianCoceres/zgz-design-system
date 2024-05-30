import { Routes } from '@angular/router';
import { ButtonsPageComponent } from './buttons.page/buttons.page.component';
import { LinkPageComponent } from './link.page/link.page.component';
import { ServicesPageComponent } from './services.page/services.page.component';

export const routes: Routes = [
  {
    path: '',
    component: ServicesPageComponent,
  },
  {
    path: 'buttons',
    component: ButtonsPageComponent,
  },
  {
    path: 'links',
    component: LinkPageComponent,
  },
];
