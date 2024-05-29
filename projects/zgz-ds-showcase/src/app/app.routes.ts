import { Routes } from '@angular/router';
import { ButtonsPageComponent } from './buttons.page/buttons.page.component';
import { LinkPageComponent } from './link.page/link.page.component';

export const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsPageComponent,
  },
  {
    path: 'links',
    component: LinkPageComponent,
  },
];
