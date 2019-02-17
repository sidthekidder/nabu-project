import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ContactsPage } from '../contacts/contacts.page';
import { NotificationsPage } from '../notifications/notifications.page';
import { SendPage } from '../send/send.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'notifications',
        outlet: 'notifications',
        component: NotificationsPage
      },
      {
        path: 'contacts',
        outlet: 'contacts',
        component: ContactsPage
      },
      {
        path: 'send',
        outlet: 'send',
        component: SendPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
