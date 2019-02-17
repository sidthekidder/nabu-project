import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactsPageModule } from '../contacts/contacts.module';
import { HomePageModule } from '../home/home.module';
import { NotificationsPageModule } from '../notifications/notifications.module';
import { SendPageModule } from '../send/send.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ContactsPageModule,
    NotificationsPageModule,
    SendPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
